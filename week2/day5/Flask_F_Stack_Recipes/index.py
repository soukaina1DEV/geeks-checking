from flask import Flask, render_template, request, redirect, url_for, flash
from database.index import connect_to_db
import os
from dotenv import load_dotenv
from math import ceil

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'dev-secret')

# عدد الوصفات في كل صفحة
PAGE_SIZE = 8


# الصفحة الرئيسية مع Pagination
@app.route('/', methods=['GET'])
def index():
    page = request.args.get('page', 1, type=int)
    offset = (page - 1) * PAGE_SIZE

    conn = connect_to_db()
    if not conn:
        return render_template('index.html', recipes=[], page=1, total_pages=1)

    cursor = conn.cursor()
    # عدد الوصفات الكلي
    cursor.execute("SELECT COUNT(*) FROM recipes;")
    total = cursor.fetchone()[0]
    total_pages = ceil(total / PAGE_SIZE)

    # الوصفات ديال الصفحة الحالية
    cursor.execute(
        "SELECT * FROM recipes ORDER BY id DESC LIMIT %s OFFSET %s;",
        (PAGE_SIZE, offset)
    )
    recipes = cursor.fetchall()
    conn.close()

    return render_template(
        'index.html',
        recipes=recipes,
        page=page,
        total_pages=total_pages
    )


# تفاصيل وصفة
@app.route('/recipes/<int:id>', methods=['GET'])
def recipe_detail(id):
    conn = connect_to_db()
    if not conn:
        return render_template('recipe_detail.html', recipe=None)

    cursor = conn.cursor()
     # زيد view واحد
    cursor.execute("UPDATE recipes SET views = views + 1 WHERE id = %s;", (id,))
    conn.commit()

    cursor.execute("SELECT * FROM recipes WHERE id = %s;", (id,))
    recipe = cursor.fetchone()
    conn.close()

    return render_template('recipe_detail.html', recipe=recipe)


# إنشاء وصفة جديدة
@app.route('/create', methods=['POST', 'GET'])
def create():
    if request.method == 'POST':
        payload = {
            'title': request.form.get('title', '').strip(),
            'ingredients': request.form.get('ingredients', '').strip(),
            'instructions': request.form.get('instructions', '').strip(),
            'category': request.form.get('category', '').strip()
        }

        # validation
        for key, value in payload.items():
            if not value:
                flash(f'{key} is required', 'red')
                return render_template('create.html')

        conn = connect_to_db()
        if not conn:
            return render_template('create.html', error='Failed to connect to database')

        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO recipes (title, ingredients, instructions, category) VALUES (%s, %s, %s, %s);",
            (payload['title'], payload['ingredients'], payload['instructions'], payload['category'])
        )
        conn.commit()
        conn.close()

        flash('Recipe created successfully', 'blue')
        return redirect(url_for('index'))

    return render_template('create.html')


# تعديل وصفة
@app.route('/edit/<int:id>', methods=['POST', 'GET'])
def edit(id):
    conn = connect_to_db()
    if not conn:
        return render_template('edit.html', recipe=None)

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM recipes WHERE id = %s;", (id,))
    recipe = cursor.fetchone()

    if request.method == 'POST':
        title = request.form.get('title', '').strip()
        ingredients = request.form.get('ingredients', '').strip()
        instructions = request.form.get('instructions', '').strip()
        category = request.form.get('category', '').strip()

        cursor.execute(
            "UPDATE recipes SET title = %s, ingredients = %s, instructions = %s, category = %s WHERE id = %s;",
            (title, ingredients, instructions, category, id)
        )
        conn.commit()
        conn.close()

        flash('Recipe updated successfully', 'blue')
        return redirect(url_for('recipe_detail', id=id))

    conn.close()
    return render_template('edit.html', recipe=recipe)


# حذف وصفة
@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    conn = connect_to_db()
    if not conn:
        return redirect(url_for('index'))

    cursor = conn.cursor()
    cursor.execute("DELETE FROM recipes WHERE id = %s;", (id,))
    conn.commit()
    conn.close()

    flash("Recipe deleted successfully", "blue")
    return redirect(url_for('index'))


# البحث
@app.route('/search', methods=['GET'])
def search():
    search_query = request.args.get('query', '').strip()
    conn = connect_to_db()
    if not conn:
        return render_template('index.html', recipes=[], page=1, total_pages=1)

    cursor = conn.cursor()

     # خزن كلمة البحث
    if search_query:
        cursor.execute("INSERT INTO search_logs (query) VALUES (%s);", (search_query,))
        conn.commit()

    cursor.execute(
        "SELECT * FROM recipes WHERE title ILIKE %s OR category ILIKE %s;",
        (f'%{search_query}%', f'%{search_query}%')
    )
    recipes = cursor.fetchall()
    conn.close()

    return render_template('index.html', recipes=recipes, page=1, total_pages=1)


# Dashboard
@app.route('/dashboard')
def dashboard():
    conn = connect_to_db()
    cursor = conn.cursor()

    # عدد الوصفات
    cursor.execute("SELECT COUNT(*) FROM recipes;")
    total_recipes = cursor.fetchone()[0]

    # عدد الوصفات حسب الكاتيجوري
    cursor.execute("SELECT category, COUNT(*) FROM recipes GROUP BY category;")
    categories = cursor.fetchall()

    # الكلمات الأكثر بحثاً
    cursor.execute("SELECT query, COUNT(*) FROM search_logs GROUP BY query ORDER BY COUNT(*) DESC LIMIT 5;")
    popular_searches = cursor.fetchall()

    # الوصفات الأكثر مشاهدة
    cursor.execute("SELECT title, views FROM recipes ORDER BY views DESC LIMIT 5;")
    top_views = cursor.fetchall()

    conn.close()

    return render_template('dashboard.html',
                           total_recipes=total_recipes,
                           categories=categories,
                           popular_searches=popular_searches,
                           top_views=top_views)


if __name__ == '__main__':
    app.run(debug=True, port=5001)

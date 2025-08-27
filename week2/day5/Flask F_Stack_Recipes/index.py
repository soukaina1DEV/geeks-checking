from flask import Flask, render_template, request, redirect, url_for, flash
from database.index import connect_to_db
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')

@app.route('/', methods=['GET'])
def index():
    conn = connect_to_db()
    if not conn:
        return render_template('index.html', recipes=[])

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM recipes")
    recipes = cursor.fetchall()
    conn.close()

    return render_template('index.html', recipes=recipes)


# تفاصيل وصفة
@app.route('/recipes/<int:id>', methods=['GET'])
def recipe_detail(id):
    conn = connect_to_db()
    if not conn:
        return render_template('recipe_detail.html', recipe=None)

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM recipes WHERE id = %s", (id,))
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
            "INSERT INTO recipes (title, ingredients, instructions, category) VALUES (%s, %s, %s, %s)",
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
    cursor.execute("SELECT * FROM recipes WHERE id = %s", (id,))
    recipe = cursor.fetchone()

    if request.method == 'POST':
        title = request.form.get('title', '').strip()
        ingredients = request.form.get('ingredients', '').strip()
        instructions = request.form.get('instructions', '').strip()
        category = request.form.get('category', '').strip()

        cursor.execute(
            "UPDATE recipes SET title = %s, ingredients = %s, instructions = %s, category = %s WHERE id = %s",
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
    cursor.execute("DELETE FROM recipes WHERE id = %s", (id,))
    conn.commit()
    conn.close()

    flash("Recipe deleted successfully", "blue")
    return redirect(url_for('index'))

@app.route('/search', methods=['GET'])
def search():
    search_query = request.args.get('query', '').strip()
    conn = connect_to_db()
    if not conn:
        return render_template('index.html', recipes=[])

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM recipes where title ILIKE %s or category ILIKE %s", (f'%{search_query}%',f'%{search_query}%'))
    recipes = cursor.fetchall()
    conn.close()

    return render_template('index.html', recipes=recipes)


if __name__ == '__main__':
    app.run(debug=True, port=5001)

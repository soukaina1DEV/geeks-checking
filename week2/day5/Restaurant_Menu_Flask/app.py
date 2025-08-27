from flask import Flask, render_template, request, redirect, url_for
import psycopg2

app = Flask(__name__)

def connect_db():
    return psycopg2.connect(
        host="localhost",
        database="restaurant",   
        user="postgres",      
        password="root"  
    )


@app.route('/menu')
def menu():
    conn = connect_db()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Menu_Items")
    items = cur.fetchall()
    conn.close()
    return render_template("menu.html", items=items)



@app.route('/add', methods=['GET', 'POST'])
def add_item():
    if request.method == 'POST':
        name = request.form['name']
        price = request.form['price']

        conn = connect_db()
        cur = conn.cursor()
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (name, price))
        conn.commit()
        conn.close()

        return redirect(url_for('menu'))
    return render_template("add_item.html")



@app.route('/update/<int:item_id>', methods=['GET', 'POST'])
def update_item(item_id):
    conn = connect_db()
    cur = conn.cursor()

    if request.method == 'POST':
        name = request.form['name']
        price = request.form['price']
        cur.execute("UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_id=%s", (name, price, item_id))
        conn.commit()
        conn.close()
        return redirect(url_for('menu'))

    cur.execute("SELECT * FROM Menu_Items WHERE item_id=%s", (item_id,))
    item = cur.fetchone()
    conn.close()
    return render_template("update_item.html", item=item)




@app.route('/delete/<int:item_id>')
def delete_item(item_id):
    conn = connect_db()
    cur = conn.cursor()
    cur.execute("DELETE FROM Menu_Items WHERE item_id=%s", (item_id,))
    conn.commit()
    conn.close()
    return redirect(url_for('menu'))



if __name__ == "__main__":
    app.run(debug=True)

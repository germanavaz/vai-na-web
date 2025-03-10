# no terminal: python app.py

from flask import Flask
import sqlite3

app = Flask(__name__)


def init_db():
    with sqlite3.connect('database.db') as conn:
        conn.execute("""CREATE TABLE IF NOT EXISTS livros(
                     id INTEGER PRIMARY KEY AUTOINCREMENT, 
                     titulo TEXT NOT NULL, 
                     categoria TEXT NOT NULL, 
                     autor TEXT NOT NULL, 
                     imagem_url TEXT NOT NULL
                     )""")
        print("Banco de dados criado.")


init_db()


@app.route('/')
def home_page():
    return '<h2>Minha página com Flask!</h2>'


if __name__ == '__main__':
    app.run(debug=True)

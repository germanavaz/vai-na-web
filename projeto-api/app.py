from flask import Flask

app = Flask(__name__)


@app.route('/')
def home_page():
    return '<h2>Minha página com Flask!</h2>'


if __name__ == '__main__':
    app.run(debug=True)

print(__name__)

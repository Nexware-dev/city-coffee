from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def hello():
    return jsonify({"greetings": "hello"})


if __name__ == "__main__":
    app.run()

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/add_user_form", methods=["POST"])
def add_user_form():
    """Add a new user to the database"""
    # TODO: Connect the database and add the user

    name = request.json["name"]
    surname = request.json["surname"]
    email = request.json["email"]

    return jsonify(f"User named {name} {surname} with a email {email} added")


if __name__ == "__main__":
    app.run()

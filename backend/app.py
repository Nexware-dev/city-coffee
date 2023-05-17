from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

DATABASE_NAME = 'database.db'


# Helper funtion for creating the users table. Call the function at the bottom of the code.
def create_users_table():
    """Create the 'users' table if it doesn't exist"""
    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()

    create_table_query = '''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            surname TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            count INTEGER NOT NULL
        )
    '''
    cursor.execute(create_table_query)
    conn.commit()
    conn.close()


# Helper funtion for deleting the users table. Call the function at the bottom of the code.
def delete_users_table():
    """Delete the 'users' table"""
    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()

    delete_table_query = '''
        DROP TABLE IF EXISTS users
    '''
    cursor.execute(delete_table_query)
    conn.commit()
    conn.close()


@app.route("/add_user_form", methods=["POST"])
def add_user_form():
    """Add a new user to the 'users' table"""
    name = request.json["name"]
    surname = request.json["surname"]
    email = request.json["email"]
    initial_count = 1

    try:
        # Connect to the database
        conn = sqlite3.connect(DATABASE_NAME)
        cursor = conn.cursor()

        # Insert user data into the 'users' table
        insert_query = '''
            INSERT INTO users (name, surname, email, count)
            VALUES (?, ?, ?, ?)
        '''
        cursor.execute(insert_query, (name, surname, email, initial_count))
        conn.commit()

        conn.close()

        # Return response indicating success and the inserted user's data
        response = {
            "success": True,
            "message": f"User {name} {surname} with email {email} added to the 'users' table"
        }
        return jsonify(response)

    except sqlite3.IntegrityError:
        conn.close()
        # Return response indicating failure
        response = {
            "success": False,
            "message": f"User with email {email} already exists"
        }
        return jsonify(response)


if __name__ == "__main__":
    create_users_table()  # Create the 'users' table if it doesn't exist
    #delete_users_table() # Delete the 'users' table if it exists
    app.run()

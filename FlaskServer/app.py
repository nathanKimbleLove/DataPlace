import os
import psycopg2
from dotenv import load_dotenv
from flask import Flask

load_dotenv()

app = Flask(__name__)
pgdbname = os.environ.get("DATABASE_DBNAME")
pguser = os.environ.get("DATABASE_USER")
pgpw = os.environ.get("DATABASE_PW")
pgurl = os.environ.get("DATABASE_URL")
connection = psycopg2.connect(dbname=pgdbname, user=pguser, password=pgpw, host=pgurl)

@app.route("/test")
def helloworld():
    return "testing testing 1 2 3"

@app.route("/pg-test")
def readAll():
    with connection:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM tasks")
            results = cursor.fetchall()
            for row in results:
                print(row)
    return "yo"

if __name__ == "__main__":
    app.run()
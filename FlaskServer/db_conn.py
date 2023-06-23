import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

pgdbname = os.environ.get("DATABASE_DBNAME")
pguser = os.environ.get("DATABASE_USER")
pgpw = os.environ.get("DATABASE_PW")
pgurl = os.environ.get("DATABASE_URL")

connection = psycopg2.connect(
    dbname="postgres",
    user=pguser,
    password=pgpw,
    host=pgurl,
    port="5432")
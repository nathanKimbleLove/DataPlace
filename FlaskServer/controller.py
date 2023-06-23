from db_conn import connection

def run_schema_file():
    with connection:
        with connection.cursor() as cursor:
            with open('schema.sql', 'r') as file:
                sql_statements = file.read()

            cursor.execute(sql_statements)

def pg_test():
    with connection:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM data_points")
            results = cursor.fetchall()
            for row in results:
                print(row)
    return results

def create_table():
    return "create table"

def create_row():
    return "create row"

def read_table():
    return "read table"

def read_row():
    return "read row"

def update_row():
    return "update row"

def delete_table():
    return "delete table"

def delete_row():
    return "delete row"
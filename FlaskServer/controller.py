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

def create_table(obj):
    return "create table"

def create_row(obj):
    return "create row"

def read_table(table_id):
    return "read table"

def read_row(table_id, row_id):
    return "read row"

def update_row(table_id, row_id):
    return "update row"

def delete_table(table_id):
    return "delete table"

def delete_row(table_id, row_id):
    return "delete row"
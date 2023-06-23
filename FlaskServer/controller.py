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

def create_chart(obj):
    return "create chart"

def create_datum(obj):
    return "create datum"

def read_chart(chart_id):
    return "read chart"

def read_datum(chart_id, datum_id):
    return "read datum"

def update_datum(chart_id, datum_id):
    return "update datum"

def delete_chart(chart_id):
    return "delete chart"

def delete_datum(chart_id, datum_id):
    return "delete datum"
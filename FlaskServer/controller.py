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

def pg_query(o):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(o["query"])
            results = cursor.fetchall()
            print(results)
    return results


def create_chart(chart_data):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(
                "INSERT INTO charts (table_name, data_type_1, data_type_1_units, data_type_2, data_type_2_units) "
                "VALUES (%s, %s, %s, %s, %s) RETURNING id",
                (chart_data['table_name'], chart_data['data_type_1'], chart_data['data_type_1_units'],
                 chart_data['data_type_2'], chart_data['data_type_2_units'])
            )
            result = cursor.fetchone()
            if result:
                return {'id': result[0]}
            print("results:::", result)
    return result

def create_datum(o):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(
                "INSERT INTO data_points (chart_id, name, description, variable_1, variable_2) "
                "VALUES (%s, %s, %s, %s, %s) RETURNING id",
                (o['chart_id'], o['name'], o['description'],
                 o['variable_1'], o['variable_2'])
            )
            result = cursor.fetchone()
            if result:
                return {'id': result[0]}
            print("results:::", result)
    return result

def read_chart(chart_id):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(
                f"SELECT * FROM charts WHERE id = {chart_id}"
            )
            chart_arr = cursor.fetchone()
            chart_info = {
              "id": chart_arr[0],
              "table_name": chart_arr[1],
              "data_type_1": chart_arr[2],
              "data_type_1_units": chart_arr[3],
              "data_type_2": chart_arr[4],
              "data_type_2_units": chart_arr[5],
            }

            cursor.execute(
                f"SELECT * FROM data_points WHERE chart_id = {chart_id}"
            )
            data_points_arr = cursor.fetchall()
            data_points = []
            for p in data_points_arr:
                data_points.append({
                    "id": p[0],
                    "chart_id": p[1],
                    "name": p[2],
                    "description": p[3],
                    "variable_1": p[4],
                    "variable_2": p[5]
                })
            print("chart_info:", chart_info, "data_points:", data_points)
    return {'chart': chart_info, 'data_points': data_points}

def read_datum(datum_id):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(
                f"SELECT * FROM data_points WHERE id = {datum_id}"
            )
            datum_arr = cursor.fetchone()
            info = {
              "id": datum_arr[0],
              "chart_id": datum_arr[1],
              "name": datum_arr[2],
              "description": datum_arr[3],
              "variable_1": datum_arr[4],
              "variable_2": datum_arr[5],
            }
            print("info: ", info)
    return info

def update_chart(chart_id, o):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(
                "UPDATE charts SET table_name = %s, data_type_1 = %s, data_type_1_units = %s, data_type_2 = %s, data_type_2_units = %s WHERE ID = %s",
                (o['table_name'], o['data_type_1'], o['data_type_1_units'], o['data_type_2'], o['data_type_2_units'], chart_id)
            )
            return 204
    return 400

def update_datum(datum_id, o):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(
                "UPDATE data_points SET chart_id = %s, name = %s, description = %s, variable_1 = %s, variable_2 = %s WHERE ID = %s",
                (o['chart_id'], o['name'], o['description'], o['variable_1'], o['variable_2'], datum_id)
            )
            return 204
    return 400

def delete_chart(chart_id):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(
                "DELETE FROM charts WHERE id = %s", (chart_id)
            )
            return 204
    return 400

def delete_datum(datum_id):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(
                "DELETE FROM data_points WHERE id = %s", (datum_id)
            )
            return 204
    return 400
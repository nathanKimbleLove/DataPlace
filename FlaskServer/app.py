from flask import Flask, jsonify, request

import controller

app = Flask(__name__)

controller.run_schema_file()

@app.route("/test")
def helloworld():
    return "testing testing 1 2 3"

@app.route("/pg-test")
def pg_test():
    results = controller.pg_test()
    return jsonify(results)


@app.post("/create-table")
def create_table():
    print("post to ", request.path, request.json)
    results = controller.create_table()
    return results

@app.post("/create-row")
def create_row():
    print("post to", request.path, request.json)
    results = controller.create_row()
    return results

@app.get("/read-table-data/<table_id>")
def read_table(table_id):
    print("get to ", request.path)
    results = controller.read_table()
    return results

@app.get("/read-row/<table_id>/<table_row>")
def read_row(table_id, table_row):
    print("get to ", request.path, table_id, table_row)
    results = controller.read_row()
    return results

@app.put("/update-row/<table_id>/<table_row>")
def update_row(table_id, table_row):
    print("put to ", request.path, request.json)
    results = controller.update_row()
    return results

@app.delete("/delete-table/<table_id>")
def delete_table(table_id, table_row):
    print("delete to ", request.path)
    results = controller.delete_table()
    return results

@app.delete("/delete-row/<table_id>/<table_row>")
def delete_row(table_id, table_row):
    print("delete to ", request.path)
    results = controller.delete_row()
    return results


if __name__ == "__main__":
    app.run()
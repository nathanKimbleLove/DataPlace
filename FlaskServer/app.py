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


@app.post("/chart")
def create_chart():
    print("post to ", request.path, request.json)
    results = controller.create_chart(request.json)
    return results

@app.post("/datum")
def create_datum():
    print("post to", request.path, request.json)
    results = controller.create_datum(request.json)
    return results

@app.get("/chart/<chart_id>")
def read_chart(chart_id):
    print("get to ", request.path)
    results = controller.read_chart(chart_id)
    return results

@app.get("/datum/<datum_id>")
def read_datum(datum_id):
    print("get to ", request.path)
    results = controller.read_datum(datum_id)
    return results

@app.put("/chart/<chart_id>")
def update_chart(chart_id):
    print("put to ", request.path, request.json)
    results = controller.update_chart(chart_id, request.json)
    return results

@app.put("/datum/<datum_id>")
def update_datum(datum_id):
    print("put to ", request.path, request.json)
    results = controller.update_datum(datum_id, request.json)
    return results

@app.delete("/chart/<chart_id>")
def delete_chart(chart_id):
    print("delete to ", request.path)
    results = controller.delete_chart(chart_id)
    return results

@app.delete("/datum/<datum_id>")
def delete_datum(datum_id):
    print("delete to ", request.path)
    results = controller.delete_datum(datum_id)
    return results


if __name__ == "__main__":
    app.run()
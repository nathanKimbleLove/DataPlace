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


@app.post("/create-chart")
def create_chart():
    print("post to ", request.path, request.json)
    results = controller.create_chart(request.json)
    return results

@app.post("/create-datum")
def create_datum():
    print("post to", request.path, request.json)
    results = controller.create_datum(request.json)
    return results

@app.get("/read-chart/<chart_id>")
def read_chart(chart_id):
    print("get to ", request.path)
    results = controller.read_chart(chart_id)
    return results

@app.get("/read-datum/<chart_id>/<chart_datum>")
def read_datum(chart_id, chart_datum):
    print("get to ", request.path)
    results = controller.read_datum(chart_id, chart_datum)
    return results

@app.put("/update-datum/<chart_id>/<chart_datum>")
def update_datum(chart_id, chart_datum):
    print("put to ", request.path, request.json)
    results = controller.update_datum(chart_id, chart_datum, request.json)
    return results

@app.delete("/delete-chart/<chart_id>")
def delete_chart(chart_id):
    print("delete to ", request.path)
    results = controller.delete_chart(chart_id)
    return results

@app.delete("/delete-datum/<chart_id>/<chart_datum>")
def delete_datum(chart_id, chart_datum):
    print("delete to ", request.path)
    results = controller.delete_datum(chart_id, chart_datum)
    return results


if __name__ == "__main__":
    app.run()
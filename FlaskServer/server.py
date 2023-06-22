from flask import Flask

app = Flask(__name__)

@app.route("/test")
def helloworld():
    return "testing testing 1 2 3"

if __name__ == "__main__":
    app.run()
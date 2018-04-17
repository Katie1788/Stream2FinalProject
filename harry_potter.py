from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json

app = Flask(__name__)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'harrypotterprojects'
COLLECTION_NAME = 'harryprojects'


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/harrypotterprojects/harryprojects")
def harry_projects():
    FIELDS = {
        '_id': False, 'name': True, 'bio': True, 'species': True, 'house': True, 'gender': True, 'date': True
    }
    with MongoClient(MONGODB_HOST, MONGODB_PORT) as conn:
        collection = conn[DBS_NAME][COLLECTION_NAME]
        projects = collection.find(projection=FIELDS, limit=55000)
        return json.dumps(list(projects))

if __name__ == '__main__':
    app.run(debug=True)

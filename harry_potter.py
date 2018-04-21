from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json

app = Flask(__name__)

MONGODB_HOST = 'ds251179.mlab.com'
MONGODB_PORT = 51179
DBS_NAME = 'heroku_16m13zq3'
COLLECTION_NAME = 'projects'
MONGO_URI = 'mongodb://root:amaretto1@ds251179.mlab.com:51179/heroku_16m13zq3'


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/harrypotterprojects/harryprojects")
def harry_projects():
    FIELDS = {
        '_id': False, 'name': True, 'bio': True, 'species': True, 'house': True, 'gender': True, 'date': True
    }
    with MongoClient(MONGO_URI) as conn:
        collection = conn[DBS_NAME][COLLECTION_NAME]
        projects = collection.find(projection=FIELDS, limit=55000)
        return json.dumps(list(projects))

if __name__ == '__main__':
    app.run(debug=True)

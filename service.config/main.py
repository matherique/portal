#!/usr/bin/env python
from flask import Flask, jsonify
from ruamel.yaml import YAML
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

def getconfig():
    dados = open('config.yaml', 'r').read()
    yaml = YAML()
    data = yaml.load(dados)
    cdata = json.loads(json.dumps(data))
    return cdata


@app.route("/")
def home():
    data = getconfig()
    return jsonify(data)


@app.route("/read/<service>")
def getservicedata(service):
    data = getconfig()
    if service not in data:
        return jsonify({})

    return jsonify(data[service])


if __name__ == '__main__':
    PORT = os.environ['PORT'] if 'PORT' in os.environ else 5002
    app.run(host="0.0.0.0", port=PORT, debug=True)

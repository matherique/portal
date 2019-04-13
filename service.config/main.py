#!/usr/bin/env python3
from flask import Flask, jsonify
from ruamel.yaml import YAML
from flask_cors import CORS
import json

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
    app.run(debug=True, port=5002)

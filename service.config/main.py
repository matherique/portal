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


if __name__ == '__main__':
    app.run(debug=True)

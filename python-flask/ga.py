# -*- coding:utf-8 -*-
from flask import Flask
from flask import request,render_template
from flask import jsonify
from flask_cors import CORS
import requests
import ipinfo
import json
import datetime
import boto3

app = Flask(__name__,template_folder='/root/templates', static_folder='/root/statics')
CORS(app)

@app.route('/')
def index():
    return render_template('aa.html')

@app.route('/health')
def health():
    return '' 

@app.route("/data", methods=["POST"])
def data():
    ip = request.remote_addr
    latencydata = json.loads(request.data)
    access_token = 'cf55ec4dfcbb19'
    handler = ipinfo.getHandler(access_token)
    details = handler.getDetails(ip)
    userdata = details.all
    userdata.update(latencydata)
    userdata['time'] = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    print(userdata)

    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-1')
    table = dynamodb.Table('latency')
    response = table.put_item(
      Item={
        'ip':userdata['ip'],
        'time':userdata['time'],
        'city':userdata['city'],
        'directlatency': userdata['directlatency'],
        'galatency':userdata['galatency'],
        'org': userdata['org'],
        'country_name': userdata['country_name'],
        'region': userdata['region']

    })
    return 'send data success'


if __name__ == "__main__":
    app.config['JSON_AS_ASCII'] = False
    app.run(host='0.0.0.0', port='8888')

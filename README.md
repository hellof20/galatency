# galatency

用于对比客户端直接访问应用和通过GA访问应用之间的延迟差异<br>
该应用分为两部分：

- nodejs的web服务<br>
返回客户端index.html<br>
客户端和nodejs之间websocket连接<br>
分别记录直接访问应用和通过GA访问的延迟<br>
将延迟数据提交给python web服务<br>

- python的web服务<br>
接收客户端提交的延迟数据<br>
写入ddb<br>

## 安装依赖
```
cd node-ws
npm i
cd python-flask
pip install -r requirements.txt
```

## 开启应用
```
cd node-ws
node index.js
cd python-flask
python ga.py
```

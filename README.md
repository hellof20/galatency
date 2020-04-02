# galatency

用于对比客户端直接访问应用和通过GA访问应用之间的延迟差异 
分为两部分：
- nodejs的web服务
返回客户端index.html
客户端和nodejs之间websocket连接
分别记录直接访问应用和通过GA访问的延迟
将延迟数据提交给python web服务

- python的web服务
接收客户端提交的延迟数据
写入ddb

## 安装依赖
```
cd node-ws
npm i
cd python-flask
pip install -r requirements.txt
```

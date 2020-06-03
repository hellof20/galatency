#!/bin/bash
yum install git -y
git clone https://github.com/hellof20/galatency.git
wget https://nodejs.org/dist/v12.16.0/node-v12.16.0-linux-x64.tar.xz
xz -d node-v12.16.0-linux-x64.tar.xz
tar -xvf node-v12.16.0-linux-x64.tar
ln -s /node-v12.16.0-linux-x64/bin/node /usr/bin/node
ln -s /node-v12.16.0-linux-x64/bin/npm /usr/bin/npm
cd /galatency/node-ws/
npm i
node index.js
echo "*/10 * * * * root /bin/bash /galatency/update.sh" >> /etc/crontab
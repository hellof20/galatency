function senddata(latencyType,latency){
    var url = "http://54.216.197.249:8081/data"
    var request = new XMLHttpRequest();
    request.open("POST", url);
    var latencydata = {"latencyType": latencyType,"latency": latency};
    request.send(JSON.stringify(latencydata));
}

var ireland_directurl = 'ws://54.216.197.249'
var ireland_gaurl = 'ws://a07bbeb186c5678d7.awsglobalaccelerator.com'
var ireland_cdnurl = 'ws://d2vn4msflecgbi.cloudfront.net'
const ireland_directws = new WebSocket(ireland_directurl);
const ireland_gaws = new WebSocket(ireland_gaurl);
const ireland_cdnws = new WebSocket(ireland_cdnurl);

// gaws.onopen = function(event){
//   gastart = new Date().getTime();
//   gaws.send('test');
// }
// directws.onopen = function(event){
//   directstart = new Date().getTime();
//   directws.send('test');
// }
ireland_directws.onmessage = function(event) {
    directlatency = new Date().getTime() - directstart;
    console.log("directlatency = "+directlatency)
    document.getElementById('directlatency').innerHTML = "Latency of Direct Connect: " + directlatency + "ms"
    senddata('direct',directlatency)
};
ireland_gaws.onmessage = function(event) {
    galatency = new Date().getTime() - gastart;
    console.log("galatency = "+galatency)
    document.getElementById('galatency').innerHTML = "Latency of Using GA: " + galatency + "ms"
    senddata('ga',galatency)
};
ireland_cdnws.onmessage = function(event) {
    cdnlatency = new Date().getTime() - cdnstart;
    console.log("cdnlatency = "+cdnlatency)
    document.getElementById('cdnlatency').innerHTML = "Latency of Using Cloudfront: " + cdnlatency + "ms"
    senddata('cdn',cdnlatency)
};

function testing() {
    console.log("testing region is " + region)
    gastart = new Date().getTime();
    ireland_gaws.send('test');
    directstart = new Date().getTime();
    ireland_directws.send('test');
    cdnstart = new Date().getTime();
    ireland_cdnws.send('test');
}
var intervalTesting;

function startTesting(){
    region = document.getElementById("region").value
    clearInterval(intervalTesting)
    intervalTesting = setInterval(testing,2500)
}

function stopTesting(){
    clearInterval(intervalTesting)
}
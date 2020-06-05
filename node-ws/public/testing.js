function senddata(latencyType,latency){
    var url = "http://:8081/data"
    var request = new XMLHttpRequest();
    request.open("POST", url);
    var latencydata = {"latencyType": latencyType,"latency": latency};
    request.send(JSON.stringify(latencydata));
}
// var frankfurt_directurl = 'ws://3.120.185.144'
// var frankfurt_gaurl = 'ws://af2397328671acf95.awsglobalaccelerator.com'
// var frankfurt_cdnurl = 'ws://d2nybbyzo37vwl.cloudfront.net'
// const frankfurt_directws = new WebSocket(frankfurt_directurl);
// const frankfurt_gaws = new WebSocket(frankfurt_gaurl);
// const frankfurt_cdnws = new WebSocket(frankfurt_cdnurl);

var ireland_directurl = 'ws://54.216.197.249'
var ireland_gaurl = 'ws://a07bbeb186c5678d7.awsglobalaccelerator.com'
var ireland_cdnurl = 'ws://d2vn4msflecgbi.cloudfront.net'
const ireland_directws = new WebSocket(ireland_directurl);
const ireland_gaws = new WebSocket(ireland_gaurl);
const ireland_cdnws = new WebSocket(ireland_cdnurl);

var tokyo_directurl = 'ws://54.238.250.242'
var tokyo_gaurl = 'ws://ac0e1efeeda8f9ef5.awsglobalaccelerator.com'
var tokyo_cdnurl = 'ws://dcjikgbu02743.cloudfront.net'
const tokyo_directws = new WebSocket(tokyo_directurl);
const tokyo_gaws = new WebSocket(tokyo_gaurl);
const tokyo_cdnws = new WebSocket(tokyo_cdnurl);

var singapore_directurl = 'ws://18.141.212.180'
var singapore_gaurl = 'ws://ac99e7f2fe7a72b29.awsglobalaccelerator.com'
var singapore_cdnurl = 'ws://d2tcdk8f370sxw.cloudfront.net'
const singapore_directws = new WebSocket(singapore_directurl);
const singapore_gaws = new WebSocket(singapore_gaurl);
const singapore_cdnws = new WebSocket(singapore_cdnurl);

var virginia_directurl = 'ws://23.21.96.0'
var virginia_gaurl = 'ws://afa48d55657e2fad1.awsglobalaccelerator.com'
var virginia_cdnurl = 'ws://d2orhkldqzu7st.cloudfront.net'
const virginia_directws = new WebSocket(virginia_directurl);
const virginia_gaws = new WebSocket(virginia_gaurl);
const virginia_cdnws = new WebSocket(virginia_cdnurl);

// var oregon_directurl = 'ws://'
// var oregon_gaurl = 'ws://'
// var oregon_cdnurl = 'ws://'
// const oregon_directws = new WebSocket(oregon_directurl);
// const oregon_gaws = new WebSocket(oregon_gaurl);
// const oregon_cdnws = new WebSocket(oregon_cdnurl);

// var hongkong_directurl = 'ws://'
// var hongkong_gaurl = 'ws://'
// var hongkong_cdnurl = 'ws://'
// const hongkong_directws = new WebSocket(hongkong_directurl);
// const hongkong_gaws = new WebSocket(hongkong_gaurl);
// const hongkong_cdnws = new WebSocket(hongkong_cdnurl);

// var bahrain_directurl = 'ws://'
// var bahrain_gaurl = 'ws://'
// var bahrain_cdnurl = 'ws://'
// const bahrain_directws = new WebSocket(bahrain_directurl);
// const bahrain_gaws = new WebSocket(bahrain_gaurl);
// const bahrain_cdnws = new WebSocket(bahrain_cdnurl);

// gaws.onopen = function(event){
//   gastart = new Date().getTime();
//   gaws.send('test');
// }
// directws.onopen = function(event){
//   directstart = new Date().getTime();
//   directws.send('test');`
// }

//frankfurt_directws.onmessage = function(event) {
//    frankfurt_directlatency = new Date().getTime() - frankfurt_directstart;
//    console.log("frankfurt_directlatency = " + frankfurt_directlatency)
//    document.getElementById('frankfurt_directlatency').innerHTML = "Latency of <b> Public Internet</b>: " + frankfurt_directlatency + "ms"
//    //senddata('direct',frankfurt_directlatency)
//};
//frankfurt_gaws.onmessage = function(event) {
//    frankfurt_galatency = new Date().getTime() - frankfurt_gastart;
//    console.log("frankfurt_galatency = " + frankfurt_galatency)
//    document.getElementById('frankfurt_galatency').innerHTML = "Latency of Using <b> Global Accelerator</b>: " + frankfurt_galatency + "ms"
//    //senddata('ga',frankfurt_galatency)
//};
//frankfurt_cdnws.onmessage = function(event) {
//    frankfurt_cdnlatency = new Date().getTime() - frankfurt_cdnstart;
//    console.log("frankfurt_cdnlatency = " + frankfurt_cdnlatency)
//    document.getElementById('frankfurt_cdnlatency').innerHTML = "Latency of Using <b> Cloudfront</b>: " + frankfurt_cdnlatency + "ms"
//    //senddata('cdn',frankfurt_cdnlatency)
//};

ireland_directws.onmessage = function(event) {
    ireland_directlatency = new Date().getTime() - ireland_directstart;
    console.log("ireland_directlatency = " + ireland_directlatency)
    document.getElementById('ireland_directlatency').innerHTML = "Latency of <b> Public Internet</b>: " + ireland_directlatency + "ms"
    //senddata('direct',ireland_directlatency)
};
ireland_gaws.onmessage = function(event) {
    ireland_galatency = new Date().getTime() - ireland_gastart;
    console.log("ireland_galatency = " + ireland_galatency)
    document.getElementById('ireland_galatency').innerHTML = "Latency of Using <b> Global Accelerator</b>: " + ireland_galatency + "ms"
    //senddata('ga',ireland_galatency)
};
ireland_cdnws.onmessage = function(event) {
    ireland_cdnlatency = new Date().getTime() - ireland_cdnstart;
    console.log("ireland_cdnlatency = " + ireland_cdnlatency)
    document.getElementById('ireland_cdnlatency').innerHTML = "Latency of Using <b> Cloudfront</b>: " + ireland_cdnlatency + "ms"
    //senddata('cdn',ireland_cdnlatency)
};

tokyo_directws.onmessage = function(event) {
    tokyo_directlatency = new Date().getTime() - tokyo_directstart;
    console.log("tokyo_directlatency = " + tokyo_directlatency)
    document.getElementById('tokyo_directlatency').innerHTML = "Latency of <b> Public Internet</b>: " + tokyo_directlatency + "ms"
    //senddata('direct',tokyo_directlatency)
};
tokyo_gaws.onmessage = function(event) {
    tokyo_galatency = new Date().getTime() - tokyo_gastart;
    console.log("tokyo_galatency = " + tokyo_galatency)
    document.getElementById('tokyo_galatency').innerHTML = "Latency of Using <b> Global Accelerator</b>: " + tokyo_galatency + "ms"
    //senddata('ga',tokyo_galatency)
};
tokyo_cdnws.onmessage = function(event) {
    tokyo_cdnlatency = new Date().getTime() - tokyo_cdnstart;
    console.log("tokyo_cdnlatency = " + tokyo_cdnlatency)
    document.getElementById('tokyo_cdnlatency').innerHTML = "Latency of Using <b> Cloudfront</b>: " + tokyo_cdnlatency + "ms"
    //senddata('cdn',tokyo_cdnlatency)
};

singapore_directws.onmessage = function(event) {
    singapore_directlatency = new Date().getTime() - singapore_directstart;
    console.log("singapore_directlatency = " + singapore_directlatency)
    document.getElementById('singapore_directlatency').innerHTML = "Latency of <b> Public Internet</b>: " + singapore_directlatency + "ms"
    //senddata('direct',singapore_directlatency)
};
singapore_gaws.onmessage = function(event) {
    singapore_galatency = new Date().getTime() - singapore_gastart;
    console.log("singapore_galatency = " + singapore_galatency)
    document.getElementById('singapore_galatency').innerHTML = "Latency of Using <b> Global Accelerator</b>: " + singapore_galatency + "ms"
    //senddata('ga',singapore_galatency)
};
singapore_cdnws.onmessage = function(event) {
    singapore_cdnlatency = new Date().getTime() - singapore_cdnstart;
    console.log("singapore_cdnlatency = " + singapore_cdnlatency)
    document.getElementById('singapore_cdnlatency').innerHTML = "Latency of Using <b> Cloudfront</b>: " + singapore_cdnlatency + "ms"
    //senddata('cdn',singapore_cdnlatency)
};

virginia_directws.onmessage = function(event) {
    virginia_directlatency = new Date().getTime() - virginia_directstart;
    console.log("virginia_directlatency = " + virginia_directlatency)
    document.getElementById('virginia_directlatency').innerHTML = "Latency of <b> Public Internet</b>: " + virginia_directlatency + "ms"
    //senddata('direct',virginia_directlatency)
};
virginia_gaws.onmessage = function(event) {
    virginia_galatency = new Date().getTime() - virginia_gastart;
    console.log("virginia_galatency = " + virginia_galatency)
    document.getElementById('virginia_galatency').innerHTML = "Latency of Using <b> Global Accelerator</b>: " + virginia_galatency + "ms"
    //senddata('ga',virginia_galatency)
};
virginia_cdnws.onmessage = function(event) {
    virginia_cdnlatency = new Date().getTime() - virginia_cdnstart;
    console.log("virginia_cdnlatency = " + virginia_cdnlatency)
    document.getElementById('virginia_cdnlatency').innerHTML = "Latency of Using <b> Cloudfront</b>: " + virginia_cdnlatency + "ms"
    //senddata('cdn',virginia_cdnlatency)
};

// oregon_directws.onmessage = function(event) {
//     oregon_directlatency = new Date().getTime() - oregon_directstart;
//     console.log("oregon_directlatency = " + oregon_directlatency)
//     document.getElementById('oregon_directlatency').innerHTML = "Latency of <b> Public Internet</b>: " + oregon_directlatency + "ms"
//     //senddata('direct',oregon_directlatency)
// };
// oregon_gaws.onmessage = function(event) {
//     oregon_galatency = new Date().getTime() - oregon_gastart;
//     console.log("oregon_galatency = " + oregon_galatency)
//     document.getElementById('oregon_galatency').innerHTML = "Latency of Using <b> Global Accelerator</b>: " + oregon_galatency + "ms"
//     //senddata('ga',oregon_galatency)
// };
// oregon_cdnws.onmessage = function(event) {
//     oregon_cdnlatency = new Date().getTime() - oregon_cdnstart;
//     console.log("oregon_cdnlatency = " + oregon_cdnlatency)
//     document.getElementById('oregon_cdnlatency').innerHTML = "Latency of Using <b> Cloudfront</b>: " + oregon_cdnlatency + "ms"
//     //senddata('cdn',oregon_cdnlatency)
// };

// hongkong_directws.onmessage = function(event) {
//     hongkong_directlatency = new Date().getTime() - hongkong_directstart;
//     console.log("hongkong_directlatency = " + hongkong_directlatency)
//     document.getElementById('hongkong_directlatency').innerHTML = "Latency of <b> Public Internet</b>: " + hongkong_directlatency + "ms"
//     //senddata('direct',hongkong_directlatency)
// };
// hongkong_gaws.onmessage = function(event) {
//     hongkong_galatency = new Date().getTime() - hongkong_gastart;
//     console.log("hongkong_galatency = " + hongkong_galatency)
//     document.getElementById('hongkong_galatency').innerHTML = "Latency of Using <b> Global Accelerator</b>: " + hongkong_galatency + "ms"
//     //senddata('ga',hongkong_galatency)
// };
// hongkong_cdnws.onmessage = function(event) {
//     hongkong_cdnlatency = new Date().getTime() - hongkong_cdnstart;
//     console.log("hongkong_cdnlatency = " + hongkong_cdnlatency)
//     document.getElementById('hongkong_cdnlatency').innerHTML = "Latency of Using <b> Cloudfront</b>: " + hongkong_cdnlatency + "ms"
//     //senddata('cdn',hongkong_cdnlatency)
// };

// bahrain_directws.onmessage = function(event) {
//     bahrain_directlatency = new Date().getTime() - bahrain_directstart;
//     console.log("bahrain_directlatency = " + bahrain_directlatency)
//     document.getElementById('bahrain_directlatency').innerHTML = "Latency of <b> Public Internet</b>: " + bahrain_directlatency + "ms"
//     //senddata('direct',bahrain_directlatency)
// };
// bahrain_gaws.onmessage = function(event) {
//     bahrain_galatency = new Date().getTime() - bahrain_gastart;
//     console.log("bahrain_galatency = " + bahrain_galatency)
//     document.getElementById('bahrain_galatency').innerHTML = "Latency of Using <b> Global Accelerator</b>: " + bahrain_galatency + "ms"
//     //senddata('ga',bahrain_galatency)
// };
// bahrain_cdnws.onmessage = function(event) {
//     bahrain_cdnlatency = new Date().getTime() - bahrain_cdnstart;
//     console.log("bahrain_cdnlatency = " + bahrain_cdnlatency)
//     document.getElementById('bahrain_cdnlatency').innerHTML = "Latency of Using <b> Cloudfront</b>: " + bahrain_cdnlatency + "ms"
//     //senddata('cdn',bahrain_cdnlatency)
// };


function testing() {
    // console.log("testing region is " + region)
    //frankfurt_gastart = new Date().getTime();
    //frankfurt_gaws.send('test');
    //frankfurt_directstart = new Date().getTime();
    //frankfurt_directws.send('test');
    //frankfurt_cdnstart = new Date().getTime();
    //frankfurt_cdnws.send('test');

    ireland_gastart = new Date().getTime();
    ireland_gaws.send('test');
    ireland_directstart = new Date().getTime();
    ireland_directws.send('test');
    ireland_cdnstart = new Date().getTime();
    ireland_cdnws.send('test');

    tokyo_gastart = new Date().getTime();
    tokyo_gaws.send('test');
    tokyo_directstart = new Date().getTime();
    tokyo_directws.send('test');
    tokyo_cdnstart = new Date().getTime();
    tokyo_cdnws.send('test');

    singapore_gastart = new Date().getTime();
    singapore_gaws.send('test');
    singapore_directstart = new Date().getTime();
    singapore_directws.send('test');
    singapore_cdnstart = new Date().getTime();
    singapore_cdnws.send('test');

    virginia_gastart = new Date().getTime();
    virginia_gaws.send('test');
    virginia_directstart = new Date().getTime();
    virginia_directws.send('test');
    virginia_cdnstart = new Date().getTime();
    virginia_cdnws.send('test');

    // oregon_gastart = new Date().getTime();
    // oregon_gaws.send('test');
    // oregon_directstart = new Date().getTime();
    // oregon_directws.send('test');
    // oregon_cdnstart = new Date().getTime();
    // oregon_cdnws.send('test');

    // hongkong_gastart = new Date().getTime();
    // hongkong_gaws.send('test');
    // hongkong_directstart = new Date().getTime();
    // hongkong_directws.send('test');
    // hongkong_cdnstart = new Date().getTime();
    // hongkong_cdnws.send('test');

    // bahrain_gastart = new Date().getTime();
    // bahrain_gaws.send('test');
    // bahrain_directstart = new Date().getTime();
    // bahrain_directws.send('test');
    // bahrain_cdnstart = new Date().getTime();
    // bahrain_cdnws.send('test');

}
var intervalTesting;

function startTesting(){
    // region = document.getElementById("region").value
    clearInterval(intervalTesting)
    intervalTesting = setInterval(testing,2500)
}

function stopTesting(){
    clearInterval(intervalTesting)
}

var directws,directstarttime;
var gaws,gastarttime;
var cdnws,cdnstarttime
var directtest,gatest,cdntest;
var selectedRegion;
var currentregion;

var frankfurt_directurl = 'ws://35.158.115.62'
var frankfurt_gaurl = 'ws://aa204fb2285eaba0f.awsglobalaccelerator.com'
var frankfurt_cdnurl = 'ws://d12v8yek5riemm.cloudfront.net'

var ireland_directurl = 'ws://54.216.197.249'
var ireland_gaurl = 'ws://a07bbeb186c5678d7.awsglobalaccelerator.com'
var ireland_cdnurl = 'ws://d2vn4msflecgbi.cloudfront.net'

var tokyo_directurl = 'ws://54.238.250.242'
var tokyo_gaurl = 'ws://ac0e1efeeda8f9ef5.awsglobalaccelerator.com'
var tokyo_cdnurl = 'ws://dcjikgbu02743.cloudfront.net'

var singapore_directurl = 'ws://18.141.212.180'
var singapore_gaurl = 'ws://ac99e7f2fe7a72b29.awsglobalaccelerator.com'
var singapore_cdnurl = 'ws://d2tcdk8f370sxw.cloudfront.net'

var virginia_directurl = 'ws://54.163.42.170'
var virginia_gaurl = 'ws://adc927d6165cdb90f.awsglobalaccelerator.com'
var virginia_cdnurl = 'ws://d38me0eucgz1iq.cloudfront.net'

var oregon_directurl = 'ws://34.222.104.82'
var oregon_gaurl = 'ws://a6266e93da687b616.awsglobalaccelerator.com'
var oregon_cdnurl = 'ws://d3m34jcpavo8p9.cloudfront.net'

var hongkong_directurl = 'ws://18.166.56.164'
var hongkong_gaurl = 'ws://ad9652ca2cc3c1e36.awsglobalaccelerator.com'
var hongkong_cdnurl = 'ws://d1o04f6y9vugw.cloudfront.net'

// var bahrain_directurl = 'ws://'
// var bahrain_gaurl = 'ws://'
// var bahrain_cdnurl = 'ws://'

function getmyip(latencyType,latency){
    var url = "http://ipinfo.io/?token=cf55ec4dfcbb19"
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            myipinfo = JSON.parse(xhr.response)
            var myip = myipinfo.ip;
            var mycity = myipinfo.city;
            var myorg = myipinfo.org
            document.getElementById('myip').innerHTML = "Your Ip is : " + myip
            document.getElementById('mycity').innerHTML = "Your City is : " + mycity
            document.getElementById('myorg').innerHTML = "Your Org is : " + myorg
        }
      }
    xhr.open("GET", url);
    xhr.send('');
}

function RegionTest(directurl,gaurl,cdnurl) {
    this.directurl = directurl;
    this.gaurl = gaurl;
    this.cdnurl = cdnurl;
    this.direct = function (){
        directws = new WebSocket(directurl)
        directws.onmessage = function(){
            var directlatency = new Date().getTime() - directstarttime;
            document.getElementById('directlatency').innerHTML = "Your browser --> <b>Public Internet </b> --> AWS " + currentregion +": " + directlatency + "ms"
        }
    }
    this.directsend = function(){
        directstarttime = new Date().getTime()
        if(directws.readyState == 1){
            directws.send('direct')
        } else {
            document.getElementById('directlatency').innerHTML = "Your browser --> <b>Public Internet</b> --> AWS " + currentregion + ": timeout"
        }
    }
    this.ga = function (){
        gaws = new WebSocket(gaurl)
        gaws.onmessage = function(){
            var galatency = new Date().getTime() - gastarttime;
            document.getElementById('galatency').innerHTML = "Your browser --> <b>Global Accelerator</b> --> AWS " + currentregion +": " + galatency + "ms"
        }
    }
    this.gasend = function(){
        gastarttime = new Date().getTime()
        if(gaws.readyState == 1) {
            gaws.send('ga')
        }else{
            document.getElementById('galatency').innerHTML = "Your browser --> <b>Global Accelerator</b> --> AWS " + currentregion + ": timeout"
        }
    }
    this.cdn = function (){
        cdnws = new WebSocket(cdnurl)
        cdnws.onmessage = function(){
            var cdnlatency = new Date().getTime() - cdnstarttime;
            document.getElementById('cdnlatency').innerHTML = "Your browser --> <b>Cloudfront </b> --> AWS " + currentregion +": " + cdnlatency + "ms"
        }
    }
    this.cdnsend = function(){
        cdnstarttime = new Date().getTime()
        if(cdnws.readyState == 1){
            cdnws.send('cdn')
        }else{
            document.getElementById('cdnlatency').innerHTML = "Your browser --> <b>Cloudfront </b> --> AWS " + currentregion + ": timeout"
        }
    }
    this.closews = function(){
        directws.close()
        gaws.close()
        cdnws.close()
    }
}

window.onload = function(){
    getmyip()
    initconnect()
}

function initconnect(){
    currentregion = document.getElementById("region").value
    awsregion = currentregion.toLowerCase()
    clearws()
    clearwsInterval()
    selectedRegion = new RegionTest(eval(awsregion+'_directurl'),eval(awsregion+'_gaurl'),eval(awsregion+'_cdnurl'))
    selectedRegion.direct()
    selectedRegion.ga()
    selectedRegion.cdn()
}

function startTesting(){
    selectedRegion.directsend();
    directtest = setInterval(function(){
        selectedRegion.directsend(); 
    }, 2000);
    
    selectedRegion.gasend();
    gatest = setInterval(function(){ 
        selectedRegion.gasend(); 
    }, 2000);

    selectedRegion.cdnsend();
    cdntest = setInterval(function(){ 
        selectedRegion.cdnsend(); 
    }, 2000);
}

function stopTesting(){
    clearwsInterval()
}

function clearwsInterval(){
    clearInterval(directtest)
    clearInterval(gatest)
    clearInterval(cdntest)
    document.getElementById('directlatency').innerHTML = "Your browser --> <b>Public Internet </b> --> AWS " + currentregion
    document.getElementById('galatency').innerHTML = "Your browser --> <b> Global Accelerator </b>--> AWS " + currentregion
    document.getElementById('cdnlatency').innerHTML = "Your browser --> <b> Cloudfront </b>--> AWS " + currentregion
}

function clearws(){
    if(typeof selectedRegion != 'undefined') {
        selectedRegion.closews();
    }
}

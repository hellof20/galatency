var directws,directstarttime;
var gaws,gastarttime;
var cdnws,cdnstarttime
var directtest,gatest,cdntest,latencytest;
var selectedRegion;
var currentregion;
var table,row,direct_cell,ga_cell,cdn_cell;
var content;

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

var bahrain_directurl = 'ws://15.185.221.163'
var bahrain_gaurl = 'ws://aa7744ef76f360514.awsglobalaccelerator.com'
var bahrain_cdnurl = 'ws://d1j0cc75yxtio9.cloudfront.net'

var mumbai_directurl = 'ws://13.235.54.236'
var mumbai_gaurl = 'ws://a8e34f1c138b22813.awsglobalaccelerator.com'
var mumbai_cdnurl = 'ws://d3k9fj5l1x9o9h.cloudfront.net'

var saopaulo_directurl = 'ws://18.230.198.235'
var saopaulo_gaurl = 'ws://a81d404df602208fd.awsglobalaccelerator.com'
var saopaulo_cdnurl = 'ws://d1v9dw8ito6x4j.cloudfront.net'

var capetown_directurl = 'ws://13.245.12.98'
var capetown_gaurl = 'ws://af9e7f71b11713952.awsglobalaccelerator.com'
var capetown_cdnurl = 'ws://dncb53thlwrlb.cloudfront.net'

var london_directurl = 'ws://35.177.241.120'
var london_gaurl = 'ws://a366fb6821b63d33d.awsglobalaccelerator.com'
var london_cdnurl = 'ws://d1i6s46t4z30qv.cloudfront.net'

var paris_directurl = 'ws://35.180.140.120'
var paris_gaurl = 'ws://a33492a16d7a11fa8.awsglobalaccelerator.com'
var paris_cdnurl = 'ws://den62qceqq4up.cloudfront.net'

var sydeny_directurl = 'ws://13.236.136.23'
var sydeny_gaurl = 'ws://a9fd083614b9692e5.awsglobalaccelerator.com'
var sydeny_cdnurl = 'ws://d2agh1d8crxnt2.cloudfront.net'

var milan_directurl = 'ws://15.161.92.197'
var milan_gaurl = 'ws://ac39c093704f5b5f2.awsglobalaccelerator.com'
var milan_cdnurl = 'ws://d3a6swnxcx9c8d.cloudfront.net'

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
            direct_cell.innerHTML = directlatency + 'ms';
            selectedRegion.gasend();
        }
    }
    this.directsend = function(){
        directstarttime = new Date().getTime()
        if(directws.readyState == 1){
            directws.send(content)
        }else{
            selectedRegion.gasend();
        }
    }
    this.ga = function (){
        gaws = new WebSocket(gaurl)
        gaws.onmessage = function(){
            var galatency = new Date().getTime() - gastarttime;
            ga_cell.innerHTML = galatency + 'ms';
            selectedRegion.cdnsend();
        }
    }
    this.gasend = function(){
        gastarttime = new Date().getTime()
        if(gaws.readyState == 1) {
            gaws.send(content)
        }else{
            selectedRegion.cdnsend();
        }
    }
    this.cdn = function (){
        cdnws = new WebSocket(cdnurl)
        cdnws.onmessage = function(){
            var cdnlatency = new Date().getTime() - cdnstarttime;
            cdn_cell.innerHTML = cdnlatency + 'ms';
        }
    }
    this.cdnsend = function(){
        cdnstarttime = new Date().getTime()
        if(cdnws.readyState == 1){
            cdnws.send(content)
        }
    }
    this.closews = function(){
        directws.close()
        gaws.close()
        cdnws.close()
    }
}

window.onload = function(){
    table = document.getElementById('tbody1')
    getmyip()
    initconnect()
}

function changeTestType(){
    clearTable()
    var testtype = document.getElementById("testtype").value;
    console.log(testtype)
    if(testtype == 'upload'){
        var d1 = document.getElementById('directlatency'); 
        d1.insertAdjacentHTML('beforebegin', '<div id="filescope"><p></p><input id="file" type="file" multiple /></div>');
    }else{
        document.getElementById("filescope").remove()
    }
}

function initconnect(){
    currentregion = document.getElementById("region").value
    awsregion = currentregion.toLowerCase()
    clearws()
    clearwsInterval()
    clearTable()
    selectedRegion = new RegionTest(eval(awsregion+'_directurl'),eval(awsregion+'_gaurl'),eval(awsregion+'_cdnurl'))
    selectedRegion.direct()
    selectedRegion.ga()
    selectedRegion.cdn()
}

function startTesting(){
    var testtype = document.getElementById("testtype").value;
    if(testtype == 'latency') {
        clearwsInterval()
        latencytest = setInterval(function(){
            row = table.insertRow(1);
            direct_cell = row.insertCell(0);
            ga_cell = row.insertCell(1);
            cdn_cell = row.insertCell(2);
            content = 'ping'
            selectedRegion.directsend(); 
            // selectedRegion.gasend();
            // selectedRegion.cdnsend(); 
        }, 2000);
    }else{
        var inputElement = document.getElementById("file");
        var testfile = inputElement.files;
        var reader = new FileReader();
        reader.readAsBinaryString(testfile[0]);
        reader.onload = function loaded(evt){
            row = table.insertRow(1);
            direct_cell = row.insertCell(0);
            ga_cell = row.insertCell(1);
            cdn_cell = row.insertCell(2);
            content = evt.target.result;
            selectedRegion.directsend(); 
            // selectedRegion.gasend();
            // selectedRegion.cdnsend(); 
        }
    }
}

function stopTesting(){
    clearwsInterval()
}

function clearTable(){
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for (var x=rowCount-1; x>0; x--) {
        table.removeChild(tableRows[x]);
    }
}

function clearwsInterval(){
    clearInterval(latencytest)
    document.getElementById('directlatency').innerHTML = "Your browser --> <b>Public Internet </b> --> AWS " + currentregion + ' Region'
    document.getElementById('galatency').innerHTML = "Your browser --> <b> Global Accelerator </b>--> AWS " + currentregion + ' Region'
    document.getElementById('cdnlatency').innerHTML = "Your browser --> <b> Cloudfront </b>--> AWS " + currentregion + ' Region'
}

function clearws(){
    if(typeof selectedRegion != 'undefined') {
        selectedRegion.closews();
    }
}

var url = 'https://www.nbatopshot.com/listings/p2p/208ae30a-a4fe-42d4-9e51-e6fd1ad2a7a9+e97d8f79-a17a-4cef-858f-f481ace3830d'

async function scrape() {
    var page = await fetch(url)
    console.log(page)
}

function plot() {
    var data = [{
        x: [0, 10, 20, 30, 40, 50],
        y: [0, 10, 20, 30, 40, 50]
    }];
    var layout = { font: { size: 18 } };
    var config = { responsive: true };
    var TESTER = document.getElementById('test');
    Plotly.newPlot(TESTER, data, layout, config);
}

function httpGet(theUrl) {
    //let headers = new Headers();
    //headers.append('Access-Control-Allow-Origin', '*');

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

var page = httpGet(url)
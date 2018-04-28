console.log('renderer is running');

const {net} = require('electron')

//  const request = net.request({
//       method: 'GET',
//       protocol: 'http:',
//       hostname: '0.0.0.0',
//       port: 5000,
//       path: '/testRequestString'
// })

// request.on('response', (response) => {
//     console.log(`STATUS: ${response.statusCode}`)
//     console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
//     response.on('data', (chunk) => {
//       console.log(`BODY: ${chunk}`)
//     })
//     response.on('end', () => {
//       console.log('No more data in response.')
//     })
// })

// request.send();

var httpRequest = new XMLHttpRequest();

//var api = '0.0.0.0:5000';
var api = 'https://jsonplaceholder.typicode.com/posts'
//console.log(httpRequest);

httpRequest.open('GET', api, true);

//console.log('about to send HTTP request')
httpRequest.send();
var text = httpRequest.response;
console.log('request supposedly sent. ResponseText: ' + text);
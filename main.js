//import { io } from './node_modules/socket.io'
var io = require('socket.io-client');

// END EXPERIMENTAL IMPORT
const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow


// Spawn Python process
var spawn = require('child_process').spawn,
    py    = spawn('python', ['./pythonBackend/main.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

console.log('about to send data');

py.stdout.on('data', function(data){
  console.log('receiving data: ' + data);
  dataString += data.toString();
  
});
py.stdout.on('end', function(){
  console.log('RECEIVED FROM PYTHON: ',dataString);
});

console.log('sending data: ' + data)
py.stdin.write(JSON.stringify(data));
//py.stdin.end();

//py.stdin.write(JSON.stringify(data));
py.stdin.end();

// END PYTHON-RELATED

// SOCKET/PARSER
console.log('loading correctly')

// Socket client
var apiURL = 'https://damp-sierra-42875.herokuapp.com/';

// Make connection
var socket = io.connect(apiURL);

// Listen for command event from Socket, pass to Python
socket.on('command', function(data) {
  console.log('RECEIVING COMMAND FROM SERVER: ');
  console.log(data.command);

  // Send to python
  dataForPassing = JSON.stringify(data.command)
  console.log('Data to pass: ' + JSON.stringify(data.command));
  //var newPython = spawn('python', ['./pythonBackend/main.py'])
  //newPython.stdin.write(dataForPassing);

  // JS-side parser functionality goes here
  // if (data.command.slice(0, 8) == 'moveXBy:') {
  //     let quantity = data.command.slice(9, data.command.length);
  //     console.log(quantity)
  //     demoFunction(Number(quantity));
  // }
});

// function demoFunction(quantity) {
//     console.log('demo parser function. Quantity: ' + quantity);
// }
// END SOCKET/PARSER

// PLAYING WITH HTTP REQUESTS
// const request = net.request({
//   method: 'GET',
//   protocol: 'http:',
//   hostname: '0.0.0.0',
//   port: 5000,
//   path: '/testRequestString'
// })




//


// EVERYTHING BELOW HERE IS ELECTRON-RELATED


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './index.html'),     // index.html, log file for dev mode
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

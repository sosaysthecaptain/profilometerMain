// var zerorpc = require("zerorpc");

// var server = new zerorpc.Server({
//     hello: function(name, reply) {
//         reply(null, "Hello, " + name);
//     }
// });

// server.bind("tcp://0.0.0.0:4242");

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// HOW TO REQUIRE FIREBASE?
//import { firebase } from './node_modules/firebase';

// Initialize Firebase
// var config = {
// apiKey: "AIzaSyAfQYpSeeC27ZJuAHIRtBdbCN63Zvfr9SE",
// authDomain: "profilometer-cc55d.firebaseapp.com",
// databaseURL: "https://profilometer-cc55d.firebaseio.com",
// projectId: "profilometer-cc55d",
// storageBucket: "profilometer-cc55d.appspot.com",
// messagingSenderId: "538361946410"
// };
// firebase.initializeApp(config);
// var firestore = firebase.firestore();

// const docRef = firestore.doc('items/currentCommand');
// //console.log(docRef);

// //oneTimeFetch()
// //getRealtimeUpdates()

// // one time fetch
// function oneTimeFetch() {
//     docRef.get().then(function(doc) {
//         if (doc && doc.exists) {
//             const myData = doc.data();
//             console.log(myData.text);
//         }
//     })
// }

// getRealtimeUpdates = function() {
//     docRef.onSnapshot(function(doc) {
//         const myData = doc.data();
//         console.log(myData.text);
//     });
// }

// // TEST OF SPAWNING PYTHON PROCESS
// console.log('renderer script running');

// // Test running Python script
// var scriptPath = './JSTest/testScript.py';
// let pyPort = 4042;
// let pyProc = null;

// pyProc = require('child_process').spawn('python', [scriptPath, pyPort])

// if (pyProc != null) {
//     console.log(pyProc)
//     console.log('child process success!')
// }

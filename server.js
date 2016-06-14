/*var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);*/
//**********************************************************************************************************************
// The server.js file is the main file of your Node.js application 
// It will load the express.js file as a module to bootstrap your Express application
//
//The process.env.NODE_ENV variable is set to the default 'development‘
//value if it doesn 't exist.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//require and create a new express app
var express = require('./config/express');
var app = express();
app.listen(3000); //this app listens to port 3000
module.exports = app; //returns the application object
console.log('Server running at http://localhost:3000/');



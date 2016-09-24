var express = require('express');
var path    = require("path");

var thrift = require('thrift');
var SaveMessageService = require('./gen-nodejs/SaveMessageService');
var LoggerService = require('./gen-nodejs/LoggerService');
var ttypes = require('./gen-nodejs/tutorial_types');
var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;


var app = express();

app.get('/',function(request, response){
  response.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/submit', function (request, response) {
  response.sendFile(path.join(__dirname+'/submit.html'));
});

app.listen(3000, function () {
  console.log('Node.js server listening on port 3000!');
});

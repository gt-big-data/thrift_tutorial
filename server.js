var express = require('express');
var path    = require("path");

var thrift = require('thrift');
var SaveMessageService = require('./gen-nodejs/SaveMessageService');
var LoggerService = require('./gen-nodejs/LoggerService');
var ttypes = require('./gen-nodejs/tutorial_types');
var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

var connection = thrift.createConnection('localhost', 9090, {
  transport : transport,
  protocol : protocol
});

connection.on('error', function(error) {
  if (error) {
    console.log('connection error -----------------');
    console.log(error);
  }
});

var client = thrift.createClient(SaveMessageService, connection);

var app = express();

app.get('/',function(request, response){
  response.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/save', function (request, response) {
  console.log(request.query);
  var message = new ttypes.Message;
  message.timestamp = +(new Date());
  message.user = request.query.user;
  message.text = request.query.text;
  message.share = request.query.share != undefined;

  client.save(message, function(error, res) {
    if (error) {
      console.log('save error -----------------');
      console.log(error);
    }
  });

  response.sendFile(path.join(__dirname+'/submit.html'));
});

app.listen(3000, function () {
  console.log('Node.js server listening on port 3000!');
});

var express = require('express');
var port = process.env.PORT || 3030;
var environment = process.env.NODE_ENV || 'development';
var app = express();
//deliver static content from the public directory
app.use(express.static(__dirname + '/public/'));
app.set('port', port);
app.listen(port);
app.get('/', function (request, response) {
  response.send('Hello World!');
});

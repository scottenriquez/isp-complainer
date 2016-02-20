var Express = require('express');
var BodyParser = require('body-parser');
var Services = require('../cable-one-twitter-complainer/server/services');
var port = process.env.PORT || 3030;
var environment = process.env.NODE_ENV || 'development';
var app = Express();
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(BodyParser());
//deliver static content from the public directory
app.use(Express.static(__dirname + '/public/'));
app.use(Express.static(__dirname + '/node_modules/'));
app.get('/partials/:partialPath', function(request, response) {
	response.render('partials/' + request.params.partialPath);
});
app.set('port', port);
app.get('/api/complain', function(request, response) {
	Services.complaint.run().done(function(output){
		response.json(output);
	});
});
app.get('*', function (request, response) {
	response.render('index');
});
app.listen(port);

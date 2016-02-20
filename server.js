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
app.use(express.static(__dirname + '/public/'));
app.get('/partials/:partialPath', function(request, response){
	response.render('partials/' + request.params.partialPath);
});
app.set('port', port);
app.get('/api/complain', function(request, response) {
	Services.complaint.run().done(function(output){
		response.json(output);
	});
});
app.get('*', function (request, response) {
	request.render('index');
});
app.listen(port);

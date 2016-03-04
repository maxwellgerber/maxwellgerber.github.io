var express = require('express');
var fs    = require("fs");

var app = express();
app.set('view engine', 'jade');
// Routes
//app.use(express.static('public'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/404', function (request, response) {
  response.send('404 error lol');
});

app.get('/:stuff', function (request, response) {
	console.log(request.params.stuff + ' requested');
	var parsed = request.params.stuff.replace('\.html','');
  response.render(parsed, {}, function(err, html){
  	if(err){
  		response.redirect('/404');
  	} else {
  		response.send(html);
  	}
  });
});

app.listen(80);
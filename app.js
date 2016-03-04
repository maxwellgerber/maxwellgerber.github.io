var express = require('express');

var app = express();
app.set('view engine', 'jade');
// Routes
//app.use(express.static('public'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/:stuff', function (request, response) {
	console.log(request.params.stuff + ' requested')
	var parsed = request.params.stuff.replace('\.html','')
  response.render(parsed);
});

app.listen(80);
var express    = require('express'),
    jade       = require('jade'),
    bodyParser = require('body-parser'),
    Task       = require('./lib/task.js'),
    app        = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/tasks', function(req, res) {
  res.send('hi from the route');
});

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Node listening at http://' + host + ':' + port);
});

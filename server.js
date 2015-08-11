var express    = require('express'),
    jade       = require('jade'),
    bodyParser = require('body-parser'),
    Triangle   = require('./lib/triangle.js'),
    app        = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/triangle', function(req, res) {
	var userTriangle = new Triangle(req.query.s1, req.query.s2, req.query.s3);

	res.render('triangle', {type: userTriangle.type(), perimeter: userTriangle.perimeter()});
});

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Node listening at http://' + host + ':' + port);
});

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./App/Routes/index');
var app = express();
app.set('views', path.join(__dirname, 'App/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.listen(3000, function() {
	console.log('Server running at port 3000: http://127.0.0.1:3000')
})
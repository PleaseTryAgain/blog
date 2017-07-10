var express = require("express"),
	app = express(),
	port = process.env.Port || 3000,
	mongoose = require('mongoose'),
	Task = require('./api/models/todoListModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/admin', {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('todo list RESTful API server started on:'+ port);

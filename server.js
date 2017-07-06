var express = require("express"),
	app = express(),
	port = process.env.Port || 3000,
	mongoose = require('mongoose'),
	Task = require('./api/models/todoListModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect = require('mongodb');

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var router = require('./api/routes/todoListRoutes');
router(app);

app.listen(port);
console.log('todo list RESTful API server started on:'+ port);

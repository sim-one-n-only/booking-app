var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var scheduleRoute = require('./routes/schedule-route');
var path = require('path');
var morgan = require('morgan');


var app = express();

var port = 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect('mongodb://localhost/schedule', function (err) {
    if(err) throw err;
    console.log('Connected to MongoDB')
});

app.use('/schedule', scheduleRoute);

app.listen(port, function () {
    console.log('server running at ' + port)
})
/**
 * Created by sim_one_n_only on 4/25/17.
 */
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var path = require("path");


var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json);
app.use(morgan("dev"));

var port = 7000;



app.listen(port, function () {
    console.log("you're app is listening on port " + port)
})
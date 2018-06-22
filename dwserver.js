/**
 * The file to start a server
 *
 */

var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");


var revroutes = require('./app/routes/dwdb.server.routes')

var app = express()

app.set('views', path.join(__dirname,'app','views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',revroutes)
app.listen(3000, function () {
	  console.log('DW Dashboard app listening on port 3000!')
	})
	
module.exports = app;
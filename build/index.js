"use strict";

var http = require('http');
var app = require('./app');
var port = process.env.PORT || 1549;
var server = http.createServer(app);
server.listen(port);
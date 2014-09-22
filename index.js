var framework = require('total.js');
var http = require('http');

var port = parseInt(process.env.PORT || '3000');
var debug = true;

framework.run(http, debug, port, '0.0.0.0');

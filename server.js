/**
 * Simple HTTP server, expressjs
 */

var express = require('express');
var app = express();
var public_folder = '';

// Default folder is the public sub-folder.
app.use(express.static(__dirname + '/' + public_folder));

app.listen(3333);

console.log('Server running, to view: http://localhost:3333');
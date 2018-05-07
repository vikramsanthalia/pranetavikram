

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const compression = require('compression');
const app = express()
var gzipStatic = require('connect-gzip-static');
app.use(compression())

app.use(gzipStatic(__dirname + '/dist'));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
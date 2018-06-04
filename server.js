const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const compression = require('compression');
const app = express();
var bodyParser = require('body-parser');
var gzipStatic = require('connect-gzip-static');
const fs = require('fs');

app.use(compression());

app.use(gzipStatic(__dirname + '/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

// app.get('/gifts', function(request, response) {
//   fs.readFile('gifts.json', (err, data) => {
//     //console.log('*****server*****', typeof data);
//     if (err) throw err;
//     response.status(200).send(data);
//   });
// });

// app.post('/gifts', function(request, response) {
//   let data = request.body.data;
//   console.log('*****server*****', typeof data);
//   console.log('*****server*****', data);
//   fs.writeFile('gifts.json', JSON.stringify(data), err => {
//     if (err) throw err;
//     response.status(200).send({ status: '200' });
//   });
// });

app.listen(port);
console.log('server started on port ' + port);

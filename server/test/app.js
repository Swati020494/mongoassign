
var express = require('express');
var app = express();
var db = require('../config/db.js');

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
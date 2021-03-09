const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express()
const port = 3000;

app.listen(port, () => {  console.log('Running on port ' + port);});

module.exports = app
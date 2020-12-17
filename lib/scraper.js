require('dotenv').config();

const store = require('./store');
const parse = require('./parse');
const request = require('./request');

request()
  .then(document => parse(document))
  .then(products => store(products)) 
  .then(res => console.log(res.length));

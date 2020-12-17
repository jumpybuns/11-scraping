const express = require('express');
const app = express();
const Product = require('./models/Product');

app.post('/products', (req, res, next) => {
  Product
    .insert(req.body)
    .then(product => res.send(product))
    .catch(next);
});

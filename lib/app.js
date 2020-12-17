const express = require('express');
const { reset } = require('nodemon');
const app = express();
const Product = require('./models/Product');

app.post('/products', (req, res, next) => {
  Product
    .insert(req.body)
    .then(product => res.send(product))
    .catch(next);
});

app.get('/products', (req, res, next) => {
  Product
    .find()
    .then(products => res.send(products))
    .catch(next);
});

app.get('/products/:id', (req, res, next) => {
  Product
    .findById(req.params.id)
    .then(product => res.send(product))
    .catch(next);
});

app.put('/products/:id', (req, res, next) => {
  Product
    .update(req.params.id, req.body)
    .then(product => res.send(product))
    .catch(next);
});

app.delete('/product/:id', (req, res, next) => {
  Product
    .delete(req.params.id)
    .then(product => res.send(product))
    .catch(next);
});

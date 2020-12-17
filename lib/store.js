const Product = require('./models/Product');

const store = products => {
  return Promise.all(products.map(product => Product.insert(product)));
};

module.exports = store;

const parse = document => {
  const products = document.querySelectorAll('product_pod');

  return [...products].map(product => ({
    name: product.querySelector('.price_color').textContent }));
    


};

module.exports = parse;

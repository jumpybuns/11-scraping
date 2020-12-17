const parse = document => {
  const products = document.querySelectorAll('product_pod');

  return [...products].map(product => ({
    title: product.querySelector('h3').textContent,
    price: product.querySelector('.price_color').textContent,
    rating: product.querySelector('p').classList.item(1),
    image: product.querySelector('img').src,
    inStock: !product.querySelector('i').textContent }));


};

module.exports = parse;

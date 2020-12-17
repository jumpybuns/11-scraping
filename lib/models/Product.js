const pool = require('../utils/pool');

module.exports = class Product {

    id;
    title;
    price;
    rating;
    image;
    inStock;

    constructor(row) {
      this.id = row.id;
      this.title = row.title;
      this.price = row.price;
      this.rating = row.rating;
      this.image = row.image;
      this.inStock = row.in_stock;
    }

    static async insert(product) {
      const { rows } = await pool.query(
        'INSERT INTO products (title, price, rating, image, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [product.title, product.price, product.rating, product.image, product.inStock]
      );

      return new Product(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM products'
      );

      return new Product(rows[0]);
    } 

    static async findById(id) {
      const { rows } = await pool.query(
        'SELECT * FROM products WHERE id=$1',
        [id]
      );

      return new Product(rows[0]);
    }

    static async update(id, product) {
      const { rows } = await pool.query(`
        UPDATE products
        SET
            title=$1,
            price=$2,
            rating=$3,
            image=$4,
            inStock=5
            WHERE id=$6
            RETURNING *
            `, 
      [product.title, product.price, product.rating, product.image, product.inStock, id]
      );

      return new Product(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM products WHERE id=$1 RETURNING *',
        [id]
      );

      return new Product(rows[0]);
    }
};

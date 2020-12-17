DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    rating TEXT NOT NULL,
    image TEXT NOT NULL,
    in_stock BOOLEAN
    
)
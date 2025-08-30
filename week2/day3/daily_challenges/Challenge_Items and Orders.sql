-- 1.Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.


CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES product_orders(order_id),
    item_name VARCHAR(100),
    price DECIMAL(10,2)
);



-- 2.There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.

order_id INT REFERENCES product_orders(order_id)



-- 3.Create a function that returns the total price for a given order.

CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)
RETURNS DECIMAL(10,2) AS $$
DECLARE
    total DECIMAL(10,2);
BEGIN
    SELECT SUM(price)
    INTO total
    FROM items
    WHERE order_id = p_order_id;

    RETURN COALESCE(total, 0); 
END;
$$ LANGUAGE plpgsql;


SELECT get_order_total(1);









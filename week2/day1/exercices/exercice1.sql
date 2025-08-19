CREATE TABLE items(
   item_id SERIAL PRIMARY KEY,
   Title varchar(100) NOT NULL,
   price integer NOT NULL
);
INSERT INTO items(Title, price)
VALUES('Small Desk', 100),
      ('Large desk', 300),
	     ('Fan', 80);


CREATE TABLE custumers(
   custumer_id SERIAL PRIMARY KEY,
   first_name varchar(100) NOT NULL,
   last_name varchar(100) NOT NULL
);
INSERT INTO custumers(first_name, last_name)
VALUES('Greg', 'Jones'),
      ('Sandra', 'Jones'),
	  ('Scott', 'Scott'),
	  ('Trevor', 'Green'),
	  ('Melanie', 'Johnson');

SELECT * FROM items;
SELECT * FROM items WHERE price > 80;
SELECT * FROM items WHERE price <= 300;
SELECT * FROM custumers WHERE last_name = 'Smith';
SELECT * FROM custumers WHERE last_name = 'Jones';
SELECT * FROM custumers WHERE first_name != 'Scott';


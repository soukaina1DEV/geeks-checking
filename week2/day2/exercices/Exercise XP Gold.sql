-- Exercise 1: DVD Rental

-- Instructions

-- 1.You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- 1.Find out how many films there are for each rating.

SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating;


-- 2.Get a list of all the movies that have a rating of G or PG-13. 

SELECT title, rating
FROM film
WHERE rating IN ('G', 'PG-13');


-- 1.Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically

SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;


-- 3.Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.


UPDATE customer
SET first_name = 'soukaina',
    last_name = 'el fajjaj',
	email = 'soukaina.elfajjaj@gmail.com'
WHERE customer_id = 1;


-- 4.Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).


SELECT address 
FROM address;



UPDATE address  
SET address = 'lem' 
WHERE address_id = 1;



-- Exercise 2: students table

-- Instructions
-- Continuation of the Day1 Exercise XPGold : students table


-- UPDATE

-- 1/
UPDATE students
SET birth_date = '1998-11-02'
WHERE first_name = 'Lea' AND last_name = 'Benichou'
   OR first_name = 'Marc' AND last_name = 'Benichou';

-- 2/

UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

-- DELETE

-- 1/

DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- COUNT

-- 1/

SELECT COUNT(*) AS total_students
FROM students;

-- 2/

SELECT COUNT(*) AS born_after_2000
FROM students
WHERE birth_date > '2000-01-01';

-- Insert / Alter

-- 1/

ALTER TABLE students
ADD COLUMN math_grade INT;

-- 2/

UPDATE students SET math_grade = 80 WHERE id = 1;

-- 3/

UPDATE students SET math_grade = 90 WHERE id IN (2,4);

-- 4/
UPDATE students SET math_grade = 40 WHERE id = 6;

-- 5/
SELECT COUNT(*) AS above_83
FROM students
WHERE math_grade > 83;

-- 6/

INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '1998-11-02', 70);

-- 7/
SELECT first_name, last_name, COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name;

-- SUM

-- 1/

SELECT SUM(math_grade) AS total_sum
FROM students;


-- Exercice 3:

-- PART1:

CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    custumer_id INT REFERENCES custumers(custumer_id),
    item_id INT REFERENCES items(item_id),
    quantity_purchased INT
);

INSERT INTO purchases (custumer_id, item_id, quantity_purchased)
VALUES (
    (SELECT custumer_id FROM custumers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT item_id FROM items WHERE title = 'Fan'),
    1
);


INSERT INTO purchases (custumer_id, item_id, quantity_purchased)
VALUES (
    (SELECT custumer_id FROM custumers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT item_id FROM items WHERE title = 'Large Desk'),
    10
);

INSERT INTO purchases (custumer_id, item_id, quantity_purchased)
VALUES (
    (SELECT custumer_id FROM custumers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT item_id FROM items WHERE title = 'Small Desk'),
    2
);


-- PART2:
-- 1.1/

SELECT * FROM purchases;

-- -- 1.2/

SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM purchases p
JOIN custumers c ON p.custumer_id = c.custumer_id;

-- 1.3/

SELECT * 
FROM purchases
WHERE custumer_id = 5;

-- 1.4/

SELECT p.id, c.first_name, c.last_name, i.title AS item_name, p.quantity_purchased
FROM purchases p
JOIN custumers c ON p.custumer_id = c.custumer_id
JOIN items i ON p.item_id = i.item_id
WHERE i.title IN ('Large Desk', 'Small Desk');

-- 2/

SELECT DISTINCT c.first_name, c.last_name, i.title AS item_name
FROM purchases p
JOIN custumers c ON p.custumer_id = c.custumer_id
JOIN items i ON p.item_id = i.item_id;

-- 3/

INSERT INTO purchases (custumer_id, item_id, quantity_purchased)
VALUES (2, NULL, 1);



select * from purchases;
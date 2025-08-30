-- Exercise 1 : DVD Rentals

-- 1.Retrieve all films with a rating of G or PG, which are are not currently rented (they have been returned/have never been borrowed).

SELECT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id 
  AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG')
  AND r.rental_id IS NULL;


-- 2.Create a new table which will represent a waiting list for children’s movies

CREATE TABLE waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES film(film_id),
    customer_id INT REFERENCES customer(customer_id),
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 3.Retrieve the number of people waiting for each children’s DVD. Test this by adding rows to the table that you created in question 2 above.

SELECT wl.film_id, f.title, COUNT(wl.customer_id) AS num_waiting
FROM waiting_list wl
JOIN film f ON wl.film_id = f.film_id
GROUP BY wl.film_id, f.title;

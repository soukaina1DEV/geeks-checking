-- Exercise 1 : DVD Rentals

-- 1.Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?


SELECT *
FROM rental
WHERE return_date IS NULL;


-- 2.Get a list of all customers who have not returned their rentals. Make sure to group your results.


SELECT c.customer_id, c.first_name, c.last_name
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name;



-- 3.Get a list of all the Action films with Joe Swank.


SELECT f.film_id, f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action'
  AND a.first_name = 'Joe'
  AND a.last_name = 'Swank';



-- Exercise 2 – Happy Halloween

-- 1.How many stores there are, and in which city and country they are located.


SELECT s.store_id, ci.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;


-- 2.How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.


SELECT s.store_id, SUM(f.length) AS total_minutes
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;


-- 3.Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs)


SELECT DISTINCT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city_id IN (
    SELECT ci.city_id
    FROM store s
    JOIN address a ON s.address_id = a.address_id
    JOIN city ci ON a.city_id = ci.city_id
);


-- 4.A list of all customers in the cities where the stores are located.
-- 5.A list of all customers in the countries where the stores are located.


SELECT DISTINCT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
    SELECT co.country_id
    FROM store s
    JOIN address a ON s.address_id = a.address_id
    JOIN city ci ON a.city_id = ci.city_id
    JOIN country co ON ci.country_id = co.country_id
);



-- 6.Some people will be frightened by watching scary movies while zombies walk the streets. Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length).
-- Hint : use the CHECK contraint

SELECT SUM(f.length) AS safe_minutes,
       SUM(f.length)/60 AS safe_hours,
       SUM(f.length)/(60*24) AS safe_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
  AND f.title NOT ILIKE '%beast%'
  AND f.title NOT ILIKE '%monster%'
  AND f.title NOT ILIKE '%ghost%'
  AND f.title NOT ILIKE '%dead%'
  AND f.title NOT ILIKE '%zombie%'
  AND f.title NOT ILIKE '%undead%'
  AND f.description NOT ILIKE '%beast%'
  AND f.description NOT ILIKE '%monster%'
  AND f.description NOT ILIKE '%ghost%'
  AND f.description NOT ILIKE '%dead%'
  AND f.description NOT ILIKE '%zombie%'
  AND f.description NOT ILIKE '%undead%';





-- 7.For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).


SELECT SUM(length) AS total_minutes,
       SUM(length)/60 AS total_hours,
       SUM(length)/(60*24) AS total_days
FROM film;



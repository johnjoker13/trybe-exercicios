USE sakila;
SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM customer WHERE (active = FALSE AND store_id = FALSE) OR first_name <> 'KENNETH' ORDER BY first_name ASC;
SELECT title,description,release_year,replacement_cost FROM film
WHERE (rating = 'PG' AND replacement_cost >= 18.00)
ORDER BY replacement_cost DESC, title ASC LIMIT 100;

SELECT * FROM customer WHERE (store_id = TRUE AND active IS TRUE);
SELECT * FROM customer WHERE (store_id = 1 AND active IS NOT TRUE);

SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC
LIMIT 50;

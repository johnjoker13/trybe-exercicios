SELECT active, COUNT(*) FROM customer GROUP BY active;
SELECT store_id, active, COUNT(*) FROM customer GROUP BY active, store_id;
SELECT rental_duration, rating FROM film GROUP BY rental_duration, rating ORDER BY rating DESC;
SELECT district, COUNT(address) FROM address GROUP BY district, address ORDER BY COUNT(address) DESC;
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating
HAVING AVG(length) 
BETWEEN 115.0 AND 121.50
ORDER BY AVG(length) DESC;
SELECT rating, SUM(replacement_cost) 
AS 'Soma Substituição'
FROM sakila.film
GROUP by rating
HAVING SUM(replacement_cost) > 3950.50
ORDER BY SUM(replacement_cost) ASC;
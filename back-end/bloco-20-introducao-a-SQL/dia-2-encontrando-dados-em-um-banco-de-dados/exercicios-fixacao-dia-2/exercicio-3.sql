USE sakila;
SELECT CONCAT (first_name, ' ' ,last_name) AS 'Nome Completo' FROM actor;
SELECT CONCAT(title, ' ' ,rental_rate) AS 'Classificação' FROM film;
SELECT CONCAT(address, ' , ' ,district) AS 'Endereço' FROM address;
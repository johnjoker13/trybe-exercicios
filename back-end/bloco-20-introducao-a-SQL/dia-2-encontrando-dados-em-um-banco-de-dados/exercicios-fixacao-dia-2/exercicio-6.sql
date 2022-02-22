-- tabela film
USE sakila;
SELECT * FROM film;
SELECT title, release_year, rating FROM film;
SELECT COUNT(*) FROM film;

--tabela actor

USE sakila;
SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT * FROM actor ORDER BY last_name, first_name DESC;

--tabela language

USE sakila;
SELECT * FROM language;
SELECT * FROM language LIMIT 5 OFFSET 1;

--Bonus
USE sakila;
SELECT * FROM film ORDER BY length DESC, replacement_cost LIMIT 20;
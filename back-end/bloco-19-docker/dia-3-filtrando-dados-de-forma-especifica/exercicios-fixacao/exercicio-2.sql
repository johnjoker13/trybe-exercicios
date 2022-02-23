USE sakila;
SELECT * FROM film WHERE title LIKE '%ace%';
SELECT * FROM film WHERE description LIKE '%china';
SELECT * FROM film WHERE description LIKE '%girl%' AND title LIKE '%lord';
SELECT * FROM film WHERE title LIKE '___%gon%';
SELECT * FROM film WHERE title LIKE '___%gon%' AND description LIKE '%Documentary%';
SELECT * FROM film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
SELECT * FROM film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

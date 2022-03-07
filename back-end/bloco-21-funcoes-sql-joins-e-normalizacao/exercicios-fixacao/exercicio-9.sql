USE sakila;
SELECT AVG(length) AS 'Média de Duração' FROM film;
SELECT MIN(length) AS 'Duração Mínima' FROM film;
SELECT MAX(length) AS 'Duração Máximo' FROM film;
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM film;
SELECT COUNT(length) AS 'Filmes Registrados' FROM film;

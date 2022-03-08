USE sakila;
SELECT 
    a.actor_id, a.first_name, a.last_name
FROM
    actor a
        INNER JOIN
    film_actor f ON a.actor_id = f.actor_id;

USE sakila;
SELECT 
    first_name, last_name, f.address
FROM
    staff a
        INNER JOIN
    address f ON a.address_id = f.address_id;

USE sakila;
SELECT 
    customer_id, first_name, email
FROM
    customer a
        INNER JOIN
    address f ON a.address_id = f.address_id
ORDER BY first_name DESC
LIMIT 100;

USE sakila;
SELECT 
    first_name, email, A.address_id, F.district, F.address
FROM
    customer A
        INNER JOIN
    address F ON A.address_id = F.address_id
WHERE
    first_name LIKE '%rene%' AND district = 'California';

USE sakila;
SELECT 
    first_name, COUNT(F.address)
FROM
    customer A
        INNER JOIN
    address F ON A.address_id = F.address_id
WHERE
    active = 1
GROUP BY first_name
ORDER BY first_name DESC;

USE sakila;
SELECT 
    first_name, last_name, AVG(F.amount)
FROM
    staff A
        INNER JOIN
    payment F ON A.staff_id = F.staff_id
WHERE
    F.payment_date LIKE '%2006%'
GROUP BY first_name , last_name;

SELECT 
    A.actor_id, A.first_name, B.film_id, C.title
FROM
    actor A
        INNER JOIN
    film_actor B ON A.actor_id = B.actor_id
        INNER JOIN
    film C ON B.film_id = C.film_id;
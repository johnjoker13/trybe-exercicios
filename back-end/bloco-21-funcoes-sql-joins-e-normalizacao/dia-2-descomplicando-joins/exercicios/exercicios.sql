USE Pixar;
SELECT 
    domestic_sales, international_sales
FROM
    BoxOffice A
        INNER JOIN
    Movies B ON A.movie_id = B.id;

USE Pixar;
SELECT 
     A.title, B.domestic_sales + B.international_sales 'Total de vendas'
FROM
    Movies A
        INNER JOIN
    BoxOffice B ON B.international_sales > B.domestic_sales;

USE Pixar;
SELECT 
    title, B.rating
FROM
    Movies A
        INNER JOIN
    BoxOffice B
ORDER BY B.rating DESC;

USE Pixar;
SELECT 
    *
FROM
    Theater A
        LEFT JOIN
    Movies B ON A.id = B.id
ORDER BY B.title DESC;

USE Pixar;
SELECT 
    *
FROM
    Movies A
        RIGHT JOIN
    Theater B ON A.id = B.id
ORDER BY B.name DESC;

USE Pixar;
SELECT * FROM Movies A INNER JOIN BoxOffice B ON B.rating > 8;


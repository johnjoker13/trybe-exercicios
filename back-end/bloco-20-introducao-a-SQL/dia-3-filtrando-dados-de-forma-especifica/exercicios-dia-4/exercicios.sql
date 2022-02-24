USE PiecesProviders;
SELECT * FROM Pieces WHERE Name LIKE 'GR%';

SELECT * FROM Provides WHERE Piece = 2 ORDER BY Provider;

SELECT Piece, Price, Provider FROM Provides WHERE Provider LIKE '%N%';

SELECT * FROM Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC;

SELECT COUNT(name) FROM Fornecedores WHERE code LIKE '%F%';

SELECT * FROM Fornecimentos WHERE (preco >= 15.00 AND preco < 40.00) ORDER BY peca;

SELECT 
    COUNT(quantity)
FROM
    Vendas
WHERE
    order_date BETWEEN '2018-04-15' AND '2019-07-30';


USE hr;
SELECT 
    CONCAT(A.FIRST_NAME, ' ', A.LAST_NAME) AS 'Nome da pessoa colaboradora'
FROM
    employees AS A
INNER JOIN 
  employees AS B ON A.MANAGER_ID = B.MANAGER_ID;

  USE hr;
SELECT A.FIRST_NAME, B.MANAGER_ID AS 'Nome Gerente' FROM employees A 
INNER JOIN employees B ON A.EMPLOYEE_ID = B.MANAGER_ID;
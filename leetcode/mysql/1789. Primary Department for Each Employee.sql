-- https://leetcode.com/problems/primary-department-for-each-employee/?envType=study-plan-v2&envId=top-sql-50
SELECT employee_id, department_id
FROM Employee
WHERE primary_flag = 'Y' 
OR employee_id IN (SELECT employee_id FROM Employee GROUP BY employee_id HAVING count(employee_id) = 1);

// GROUP by 절의 having에 쓰이는 집계함수를 그대로 SELECT의 컬럼으로 써도 되지만 안써도 된다.
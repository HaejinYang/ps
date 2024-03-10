# Write your MySQL query statement below
-- 매니저는 다른 사람이 report_to의 대상으로 삼은경우
-- reports_to를 뽑고, id를 이용하여 emplooyed_id를 뽑고
-- 첫 번째 풀이
select e2.employee_id, e2.name, IF(count(e2.employee_id) = 0, null, count(e2.employee_id)) as reports_count, ROUND(avg(e1.age), 0) as average_age
from Employees as e1, Employees as e2
where e1.reports_to is not null and e1.reports_to = e2.employee_id
--  문제점...
/**
    | employee_id | name    | reports_to | age |
    | ----------- | ------- | ---------- | --- |
    | 9           | Hercy   | null       | 43  |
    | 6           | Alice   | null       | 41  |
    | 4           | Bob     | null       | 36  |
    | 2           | Winston | null       | 37  |

    인 경우에 NULL인 로우 하나가 리턴되는데 그 로우를 없애야하는데 실패
*/


--  두 번째 풀이
--  GROUP BY e2.employee_id를 이용. group by가 null 결과를 지운다.
select e2.employee_id, e2.name, count(e2.employee_id) as reports_count, ROUND(avg(e1.age), 0) as average_age
from Employees as e1, Employees as e2
where e1.reports_to is not null and e1.reports_to = e2.employee_id
GROUP BY e2.employee_id
ORDER BY e2.employee_id


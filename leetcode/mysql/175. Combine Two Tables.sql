# Write your MySQL query statement below
# null로 어떻게 만들지 흠...

SELECT p.firstName, p.lastName, a.city, a.state FROM Person p
LEFT JOIN Address a
ON p.personId = a.personId

-- null을 명시하기 위해 left join 사용
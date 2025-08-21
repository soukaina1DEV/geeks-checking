-- Daily challenge : SQL Puzzle



-- Q1
Output: 0
-- Because the subquery contains NULL, the NOT IN condition fails for all rows


-- Q2
Output: 2
-- The condition only excludes id = 5, so the other rows are counted.


-- Q3
Output: 0
-- The subquery returns 5 and NULL. Because of NULL, NOT IN excludes everything


-- Q4
Output: 2
-- The subquery returns only 5, so only id = 5 is excluded
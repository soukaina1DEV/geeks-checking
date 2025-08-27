-- Insert
-- 1.Insert the data seen above to the students table. Find the most efficient way to insert the data.

CREATE TABLE students(

id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
birth_date DATE NOT NULL

);

-- 2.Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
INSERT INTO students(first_name,last_name,birth_date)
VALUES('Marc','Benichou','02/11/1998'),
      ('Yoan','Cohen','2010/12/03'),
	  ('Lea','Benichou','1987/07/27'),
	  ('Amelia','Dux','1996/04/07'),
	  ('David','Grez','2003/06/14'),
	  ('Omer','Simpson','1980/10/03')


-- Select
-- 1.Fetch all of the data from the table.
SELECT *
FROM students;

-- 2.Fetch all of the students first_names and last_names.
SELECT first_name, last_name
FROM students;

-- 3.For the following questions, only fetch the first_names and last_names of the students.

-- 1.Fetch the student which id is equal to 2.
SELECT first_name, last_name 
FROM students 
WHERE id = 2;

-- 2.Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name 
FROM students 
WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- 3.Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name 
FROM students 
WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- 4.Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '%a%';

-- 5.Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE 'a%';

-- 6.Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '%a';

-- 7.Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '%a_';

-- 8.Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name, last_name 
FROM students 
WHERE id = 1 or id = 3;

-- 4.Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * 
FROM students 
WHERE birth_date >= '2000/01/01';












-- Exrecises XP Gold

-- Exercise 1 : Students table #2


-- >>>>> This is a continuation of the Exercise XP + <<<<<
-- Select
-- For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.


-- 1.Fetch the first four students. You have to order the four students alphabetically by last_name.

SELECT first_name, last_name, birth_date 
FROM students 
ORDER BY last_name LIMIT 4;


-- 2.Fetch the details of the youngest student.

SELECT first_name, last_name, birth_date 
FROM students 
ORDER BY birth_date DESC LIMIT 1;


-- 3.Fetch three students skipping the first two students.

SELECT first_name, last_name, birth_date 
FROM students 
ORDER BY id LIMIT 3 OFFSET 2;



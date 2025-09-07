-- Drop existing tables (order matters due to FKs)
DROP TABLE IF EXISTS tickets CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS attendees CASCADE;
DROP TABLE IF EXISTS organizers CASCADE;


-- Organizers
CREATE TABLE organizers (
id SERIAL PRIMARY KEY,
name VARCHAR(120) NOT NULL,
email VARCHAR(120) NOT NULL,
phone VARCHAR(30)
);


-- Events
CREATE TABLE events (
id SERIAL PRIMARY KEY,
name VARCHAR(150) NOT NULL,
date DATE NOT NULL,
location VARCHAR(200) NOT NULL,
description TEXT,
organizer_id INTEGER REFERENCES organizers(id) ON DELETE SET NULL
);


-- Attendees
CREATE TABLE attendees (
id SERIAL PRIMARY KEY,
name VARCHAR(120) NOT NULL,
email VARCHAR(120) UNIQUE NOT NULL,
phone VARCHAR(30)
);


-- Tickets (Event ↔ Attendee)
CREATE TABLE tickets (
id SERIAL PRIMARY KEY,
event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE,
attendee_id INTEGER NOT NULL REFERENCES attendees(id) ON DELETE CASCADE,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
CONSTRAINT uq_event_attendee UNIQUE (event_id, attendee_id)
);


-- Seed Organizers (10)
INSERT INTO organizers (name, email, phone) VALUES
('Atlas Events', 'contact@atlas.ma', '+212600000001'),
('Casablanca Live', 'info@casa-live.ma', '+212600000002'),
('Marrakech Hub', 'hello@marrakech-hub.ma', '+212600000003'),
('Rabat Culture', 'team@rabatculture.ma', '+212600000004'),
('Fes Art', 'hi@fesart.ma', '+212600000005'),
('Agadir Waves', 'go@agadirwaves.ma', '+212600000006'),
('Tangier Nights', 'hey@tangiernights.ma', '+212600000007'),
('Oujda Connect', 'events@oujda.ma', '+212600000008'),
('Sahara Fest', 'hi@saharafest.ma', '+212600000009'),
('Chefchaouen Blue', 'blue@chefchaouen.ma', '+212600000010');


-- Seed Events (10)
INSERT INTO events (name, date, location, description, organizer_id) VALUES
('Tech Summit', '2025-09-10', 'Casablanca', 'A summit about tech trends.', 2),
('Music Fiesta', '2025-09-15', 'Marrakech', 'Live music and artists.', 3),
('Startup Night', '2025-10-01', 'Rabat', 'Pitching night for startups.', 4),
('Art Expo', '2025-08-30', 'Fes', 'Local art exhibition.', 5),
('Surf Camp', '2025-09-05', 'Agadir', 'Surf and beach fun.', 6),
('Food Carnival', '2025-09-20', 'Tangier', 'Street food and chefs.', 7),
('Sahara Marathon', '2025-11-02', 'Laayoune', 'Desert marathon.', 9),
('Blue Festival', '2025-10-12', 'Chefchaouen', 'Music and culture.', 10),
('Gaming Con', '2025-09-25', 'Casablanca', 'Games and e-sports.', 2),
('Book Fair', '2025-10-20', 'Rabat', 'Books and authors.', 4);


-- Seed Attendees (15)
INSERT INTO attendees (name, email, phone) VALUES
('Aya Ben', 'aya@example.com', '+212611111111'),
('Youssef Ali', 'youssef@example.com', '+212622222222'),
('Imane K', 'imane@example.com', '+212633333333'),
('Omar R', 'omar@example.com', '+212644444444'),
('Sara M', 'sara@example.com', '+212655555555'),
('Hajar T', 'hajar@example.com', '+212666666666'),
('Khalid S', 'khalid@example.com', '+212677777777'),
('Nadia A', 'nadia@example.com', '+212688888888'),
('Samir B', 'samir@example.com', '+212699999999'),
('Salma D', 'salma@example.com', '+212612345678'),
('Anas F', 'anas@example.com', '+212623456789'),
('Oumaima H', 'oumaima@example.com', '+212634567890'),
('Fatima Z', 'fatima@example.com', '+212645678901'),
('Ibrahim C', 'ibrahim@example.com', '+212656789012'),
('Soukaina J', 'soukaina@example.com', '+212667890123');


-- Seed Tickets (random distribution)
INSERT INTO tickets (event_id, attendee_id, created_at) VALUES
(1,1,'2025-08-10'), (1,2,'2025-08-12'), (1,3,'2025-08-15'),
(2,4,'2025-08-18'), (2,5,'2025-08-19'),
(3,6,'2025-09-01'), (3,7,'2025-09-02'), (3,8,'2025-09-03'),
(4,9,'2025-08-20'),
(5,10,'2025-08-25'), (5,11,'2025-08-26'),
(6,12,'2025-09-05'), (6,13,'2025-09-06'), (6,14,'2025-09-07'),
(7,15,'2025-09-10'),
(8,1,'2025-09-12'), (8,2,'2025-09-13'),
(9,3,'2025-09-15'), (9,4,'2025-09-16'), (9,5,'2025-09-17'),
(10,6,'2025-09-20');
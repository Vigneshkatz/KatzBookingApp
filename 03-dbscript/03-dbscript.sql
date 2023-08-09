create database katzmoviez;
use katzmoviez;

CREATE TABLE movies (
  id INT PRIMARY KEY,
  moviename VARCHAR(255) NOT NULL,
  directedby VARCHAR(255) NOT NULL,
  origin VARCHAR(255) NOT NULL,
  ticketprice INT NOT NULL
);

INSERT INTO movies (id, moviename, directedby, origin, ticketprice)
VALUES
  (1, 'Avatar', 'James Cameron', 'USA', 15),
  (2, 'The Shawshank Redemption', 'Frank Darabont', 'USA', 12),
  (3, 'Inception', 'Christopher Nolan', 'USA', 10),
  (4, 'The Godfather', 'Francis Ford Coppola', 'USA', 12),
  (5, 'Pulp Fiction', 'Quentin Tarantino', 'USA', 14),
  (6, 'The Dark Knight', 'Christopher Nolan', 'USA', 13),
  (7, 'Forrest Gump', 'Robert Zemeckis', 'USA', 11),
  (8, 'Fight Club', 'David Fincher', 'USA', 10),
  (9, 'The Matrix', 'The Wachowskis', 'USA', 12),
  (10, 'Interstellar', 'Christopher Nolan', 'USA', 14),
  (11, 'Forrest Gump', 'Robert Zemeckis', 'USA', 11),
  (12, 'Schindler''s List', 'Steven Spielberg', 'USA', 12),
  (13, 'The Lord of the Rings: The Fellowship of the Ring', 'Peter Jackson', 'New Zealand', 13),
  (14, 'The Lion King', 'Roger Allers, Rob Minkoff', 'USA', 11),
  (15, 'The Avengers', 'Joss Whedon', 'USA', 13),
  (16, 'The Titanic', 'James Cameron', 'USA', 12),
  (17, 'Gladiator', 'Ridley Scott', 'USA', 11),
  (18, 'Finding Nemo', 'Andrew Stanton, Lee Unkrich', 'USA', 10),
  (19, 'The Dark Knight Rises', 'Christopher Nolan', 'USA', 12),
  (20, 'The Matrix Reloaded', 'The Wachowskis', 'USA', 14),
  (21, 'Inception', 'Christopher Nolan', 'USA', 10),
  (22, 'Forrest Gump', 'Robert Zemeckis', 'USA', 11),
  (23, 'The Godfather: Part II', 'Francis Ford Coppola', 'USA', 12),
  (24, 'The Lord of the Rings: The Two Towers', 'Peter Jackson', 'New Zealand', 13),
  (25, 'Shrek', 'Andrew Adamson, Vicky Jenson', 'USA', 9),
  (26, 'The Shawshank Redemption', 'Frank Darabont', 'USA', 12),
  (27, 'The Lion King', 'Roger Allers, Rob Minkoff', 'USA', 11),
  (28, 'Inception', 'Christopher Nolan', 'USA', 10),
  (29, 'The Dark Knight', 'Christopher Nolan', 'USA', 13),
  (30, 'Forrest Gump', 'Robert Zemeckis', 'USA', 11),
  (31, 'Forrest Gump', 'Robert Zemeckis', 'USA', 11),
  (32, 'Fight Club', 'David Fincher', 'USA', 10),
  (33, 'The Matrix', 'The Wachowskis', 'USA', 12),
  (34, 'Interstellar', 'Christopher Nolan', 'USA', 14),
  (35, 'Forrest Gump', 'Robert Zemeckis', 'USA', 11),
  (36, 'The Shawshank Redemption', 'Frank Darabont', 'USA', 12),
  (37, 'The Lord of the Rings: The Return of the King', 'Peter Jackson', 'New Zealand', 13),
  (38, 'The Lion King', 'Roger Allers, Rob Minkoff', 'USA', 11),
  (39, 'The Avengers', 'Joss Whedon', 'USA', 13),
  (40, 'The Titanic', 'James Cameron', 'USA', 12),
  (41, 'Gladiator', 'Ridley Scott', 'USA', 11),
  (42, 'Finding Nemo', 'Andrew Stanton, Lee Unkrich', 'USA', 10),
  (43, 'The Dark Knight Rises', 'Christopher Nolan', 'USA', 12),
  (44, 'The Matrix Reloaded', 'The Wachowskis', 'USA', 14),
  (45, 'Inception', 'Christopher Nolan', 'USA', 10),
  (46, 'Forrest Gump', 'Robert Zemeckis', 'USA', 11),
  (47, 'The Godfather: Part II', 'Francis Ford Coppola', 'USA', 12),
  (48, 'The Lord of the Rings: The Two Towers', 'Peter Jackson', 'New Zealand', 13),
  (49, 'Shrek', 'Andrew Adamson, Vicky Jenson', 'USA', 9),
  (50, 'Avatar', 'James Cameron', 'USA', 15);
select * from movies;
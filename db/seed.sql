\c snacks_dev; 

INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image, carbs, description) VALUES
('Key Lime Pie', 0.6, 8, 37, false, 'https://npr.brightspotcdn.com/dims4/default/b0d684c/2147483647/strip/true/crop/1920x1276+0+0/resize/880x585!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwfae%2Ffiles%2F201806%2Fkey-2763884_1920.jpg', 50, 'So delicious!!' ),
('Pistachios 50g', 5, 10, 4, true, 'https://www.publicdomainpictures.net/pictures/10000/nahled/1-1235483734692z.jpg', 14, 'Get crackin'),
('Brownies',  6, 8, 50, false, 'https://www.fattoincasadabenedetta.it/wp-content/uploads/2022/04/AdobeStock_326555538-1200x900.jpg', 35, 'Brownies for my Brownie'),
('Scooby Snacks', 25, 55, 200, false, 'https://i.pinimg.com/originals/5c/ec/66/5cec66f299da3bd9ed2cf4299ee8d921.jpg', 70, 'Scooby-Doo and Shaggy''s favorite!'),
('Bertie Bott''s Every Flavor Beans', 2, 2, 30, false, 'https://onecreativemommy.com/wp-content/uploads/2013/10/harry-potter-party-favors-bertie-botts.jpg', 2, 'Watch out for the earwax and booger flavors!'),
('Lembas Bread', 20, 150, 3, true, 'https://celebrationgeneration.com/wp-content/uploads/2015/02/Lembas-3.jpg', 40, 'Middle Earth''s finest delicacy'),
('Green Eggs and Ham', 15, 40, 4, true, 'https://www.obxtoday.com/wp-content/uploads/2021/09/Sam-I-Am.jpg', 25, 'You will like them here or there. You will like them anywhere!'),
('TMNT Pizza', 6, 16, 19, false, 'https://www.geekgirlauthority.com/wp-content/uploads/2019/03/tmnt-pizza-1182x640.jpg', 180, 'Cowabunga!!!'),
('Ed, Edd, & Eddy Jawbreaker', 0, 0, 300, false, 'https://static.wikia.nocookie.net/edwikia/images/5/5d/Candy_store2.png/revision/latest/scale-to-width-down/250?cb=20160315080118', 0, 'What''s big, round, and costs a nickel?'),
('Whipple Scrumptious Fudgemallow Delight', 4, 8, 500, false, 'https://beachpackagingdesign.com/wp-content/uploads/2015/03/fictionwonka2.jpg', 7, 'Don''t bite into your Golden Ticket!'),
('Krabby Patty', 4, 8, 19, false, 'https://comicvine.gamespot.com/a/uploads/original/3/38873/1866191-kp1.png', 25, 'Ravioli, ravioli. Give me the formuoli.'),
('TrunchBull''s Chocolate Cake ', 4, 8, 1000, false, 'https://www.throwbacks.com/content/images/2017/09/850--4--1.png', 2300, 'Bruce: My mom''s is better.'),
('Butter Beer', 0, 0, 29, false, 'https://images.labusinessjournal.com/wp-content/uploads/2021/11/Butterbeer_HarryPotter.jpg', 42, 'The most delicious thing Harry Potter ever tasted!');


-- ('Healthy Birthday Cake Square', 4, 8, 19, false, 'https://content.nutrisystem.com/images/products/alc/large/BirthdayCakeSquare_L.jpg');


-- npm run dbseed

-- (name, fiber, protein, added_sugar, is_healthy, image, carbs, description)
-- use advanced image search to choose images that are square (aspect ratio)
-- https://www.google.com/advanced_image_search
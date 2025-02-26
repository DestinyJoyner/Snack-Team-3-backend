-- DROP DATABASE IF EXISTS snacks_dev;
-- CREATE DATABASE snacks_dev; 

-- \c snacks_dev; 
DROP TABLE IF EXISTS snacks;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber NUMERIC DEFAULT 0,
    protein NUMERIC DEFAULT 0,
    added_sugar NUMERIC DEFAULT 0,
    is_healthy BOOL,
    image TEXT DEFAULT 'not found pic',
    description TEXT DEFAULT 'description',
    carbs NUMERIC DEFAULT 0 
);

-- devs table
DROP TABLE IF EXISTS devs;

CREATE TABLE devs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    imageURL TEXT,
    githubURL TEXT,
    indeedURL TEXT,
    email TEXT, 
    description TEXT
);

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
    name TEXT NOT NULL,
    snack_id INT NOT NULL,
    CONSTRAINT fk_snacks_snack_id
    FOREIGN KEY (snack_id) REFERENCES snacks(id) ON DELETE CASCADE
);

-- npm run dbinit


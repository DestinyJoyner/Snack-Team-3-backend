DROP DATABASE IF EXISTS snacks_dev;
CREATE DATABASE snacks_dev; 

\c snacks_dev; 

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

-- npm run dbinit


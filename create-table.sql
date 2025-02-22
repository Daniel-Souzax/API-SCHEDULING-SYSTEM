CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    duration INT NOT NULL,
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    service_id INT REFERENCES services(id) ON DELETE CASCADE,
    date_time TIMESTAMP NOT NULL,
    duration INT NOT NULL
);
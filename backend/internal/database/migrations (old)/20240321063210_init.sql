-- +goose Up
-- +goose StatementBegin

-- +goose StatementEnd
CREATE TABLE users
(
    id serial not null unique,
    nickname varchar(255) not null,
    password_hash varchar(255) not null
);

CREATE TABLE teams
(
    id serial not null unique,
    leader int references users (id) not null,
    members int references users (id) not null,
    resumes int references resumes (id),
    tournaments int references tournaments (id)
);

CREATE TABLE tournaments
(
    id serial not null unique,
    organizer int references users (id) not null,
    participants int references users (id),
    applications int references applications (id),
    `status` varchar(255) not null
);

CREATE TABLE matches
(
    id serial not null unique,
    participants int references users (id) not null,
    winner int references teams (id),
    `status` varchar(255) not null
);

CREATE TABLE resumes
(
    id serial not null unique,
    author int references users (id) not null,
    `status` varchar(255) not null
);

CREATE TABLE applications
(
    id serial not null unique,
    author int references teams (id) not null,
    `status` varchar(255) not null
);
-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
-- +goose StatementEnd

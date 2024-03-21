CREATE TABLE "Users"(
    "user_id" SERIAL NOT NULL UNIQUE,
    "user_nickname" VARCHAR(255) NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "user_lastname" VARCHAR(255) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "pass_hash" VARCHAR(255) NOT NULL,
    "team_id" INTEGER,
    "role_id" INTEGER NOT NULL
);
ALTER TABLE
    "Users" ADD PRIMARY KEY("user_id");
CREATE TABLE "Matches"(
    "match_id" SERIAL NOT NULL,
    "match_winners" INTEGER,
    "tournament_id" INTEGER
);
ALTER TABLE
    "Matches" ADD PRIMARY KEY("match_id");
CREATE TABLE "Teams"(
    "team_id" SERIAL NOT NULL,
    "team_name" VARCHAR(255) NOT NULL,
    "leader_id" INTEGER NOT NULL,
    "tournament_id" INTEGER
);
ALTER TABLE
    "Teams" ADD PRIMARY KEY("team_id");
CREATE TABLE "Games"(
    "game_id" SERIAL NOT NULL,
    "game_name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Games" ADD PRIMARY KEY("game_id");
CREATE TABLE "Tournaments"(
    "tournament_id" SERIAL NOT NULL,
    "tournament_name" VARCHAR(255) NOT NULL,
    "tournament_status" VARCHAR(255) NOT NULL,
    "organizer_id" INTEGER NOT NULL,
    "game_id" INTEGER,
    "start_date" VARCHAR(255),
    "end_date" VARCHAR(255)
);
ALTER TABLE
    "Tournaments" ADD PRIMARY KEY("tournament_id");
CREATE TABLE "UserRoles"(
    "role_id" SERIAL NOT NULL,
    "role_name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "UserRoles" ADD PRIMARY KEY("role_id");
ALTER TABLE
    "Tournaments" ADD CONSTRAINT "tournaments_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "Games"("game_id");
ALTER TABLE
    "Teams" ADD CONSTRAINT "teams_tournament_id_foreign" FOREIGN KEY("tournament_id") REFERENCES "Tournaments"("tournament_id");
ALTER TABLE
    "Tournaments" ADD CONSTRAINT "tournaments_organizer_id_foreign" FOREIGN KEY("organizer_id") REFERENCES "Users"("user_id");
ALTER TABLE
    "Teams" ADD CONSTRAINT "teams_leader_id_foreign" FOREIGN KEY("leader_id") REFERENCES "Users"("user_id");
ALTER TABLE
    "Users" ADD CONSTRAINT "users_role_id_foreign" FOREIGN KEY("role_id") REFERENCES "UserRoles"("role_id");
ALTER TABLE
    "Matches" ADD CONSTRAINT "matches_match_winners_foreign" FOREIGN KEY("match_winners") REFERENCES "Teams"("team_id");
ALTER TABLE
    "Matches" ADD CONSTRAINT "matches_tournament_id_foreign" FOREIGN KEY("tournament_id") REFERENCES "Tournaments"("tournament_id");
ALTER TABLE
    "Users" ADD CONSTRAINT "users_team_id_foreign" FOREIGN KEY("team_id") REFERENCES "Teams"("team_id");
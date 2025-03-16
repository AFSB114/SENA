-- Migrations will appear here as you chat with AI

create table artists (
  id INT,
  name VARCHAR(80),
  PRIMARY KEY(id)
);

create table albums (
  id INT,
  title VARCHAR(80),
  artist_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(artist_id) REFERENCES artists(id)
);

create table tracks (
  id INT,
  title VARCHAR(80),
  album_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(album_id) REFERENCES albums(id)
);

create table playlists (
  id INT,
  name VARCHAR(80),
  PRIMARY KEY(id)
);

create table users (
  id INT,
  name VARCHAR(80),
  email VARCHAR(255),
  PRIMARY KEY(id)
);

create table user_playlists (
  id INT,
  user_id INT,
  playlist_id INT,
  created DATE,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(playlist_id) REFERENCES playlists(id)
);

create table playlist_tracks (
  id INT,
  playlist_id INT,
  track_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(playlist_id) REFERENCES playlists(id),
  FOREIGN KEY(track_id) REFERENCES tracks(id)
);

create table artist_followers (
  id INT,
  artist_id INT,
  user_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(artist_id) REFERENCES artists(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);


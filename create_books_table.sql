CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  description TEXT,
  year INTEGER,
  publisher TEXT,
  cover TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

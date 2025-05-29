# Bookshelf

To get started, follow these steps:

1) Create a Postgresql database 'bookshelf' for the project: `CREATE DATABASE bookshelf`;

2) Create a `backend/.env` file which includes a DATABASE_URL string pointing to your local Postgresql database.
Example: `DATABASE_URL=postgresql://<username>:<password>@localhost:5432/bookshelf`

3) Create the `books` table:
```
psql -d bookshelf -U your_username -f create_books_table.sql
```

4) Seed the database: `node backend/seedBooks.js`

5) Fire up the apps (both backend and frontend) with `npm run dev`!

6) Navigate to `http://localhost:5173` or wherever Vite tells you the frontend is running, and enjoy your new Bookshelf! 

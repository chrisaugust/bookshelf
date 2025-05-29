# Bookshelf

To get started, follow these steps:

1) Create a `backend/.env` file which includes a DATABASE_URL string pointing to your local Postgresql database.
Example: `DATABASE_URL=postgresql://<username>:<password>@localhost:5432/bookshelf`

2) Create the database:
```
psql -d bookshelf -U your_username -f create_books_table.sql
```

3) Seed the database: `node backend/seedBooks.js`

4) Fire up the apps!
```
cd backend
npm run dev
cd ..
cd frontend
npm run dev
```

5) Navigate to `http://localhost:5173` or wherever Vite tells you the frontend is running, and enjoy your new Bookshelf! 

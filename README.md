# Bookshelf

To get started, follow these steps:

1) Create a `backend/.env` file which includes a DATABASE_URL string pointing to your local Postgresql database.
Example: `DATABASE_URL=postgresql://<username>:<password>@localhost:5432/bookshelf`

2) Seed the database: `$ node backend/seedBooks.js`

3) Fire up the apps!
```
cd backend
npm run dev
cd ..
cd frontend
npm run dev
```

4) Navigate to `http://localhost:5173` or wherever Vite tells you the frontend is running, and enjoy your new Bookshelf! 

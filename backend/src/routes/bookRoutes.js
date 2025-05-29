const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  const books = await Book.getAll();
  res.json(books);
});

router.get('/:id', async (req, res) => {
  const book = await Book.getById(req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

router.post('/', async (req, res) => {
  const { title, author, status, description, year, publisher, cover } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const newBook = await Book.create({ title, author, status, description, year, publisher, cover });
  res.status(201).json(newBook);
});

router.put('/:id', async (req, res) => {
  const { title, author, status, description, year, publisher, cover } = req.body;
  const updatedBook = await Book.update(req.params.id, { title, author, status, description, year, publisher, cover });
  if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
  res.json(updatedBook);
});

router.delete('/:id', async (req, res) => {
  const deletedBook = await Book.delete(req.params.id);
  if (!deletedBook) return res.status(404).json({ error: 'Book not found' });
  res.json({ message: 'Book deleted' });
});

module.exports = router;
const Book = require('../../src/models/Book');
const db = require('../../src/db');

describe('Book Model', () => {
  let book1, book2, book3;

  beforeAll(async () => {
    await db.query('DELETE FROM books');

    book1 = await Book.create({
      title: 'Being You',
      author: 'Anil Seth',
      year: 2021,
      publisher: 'Dutton',
      cover: 'http://example.com/beingyou.jpg',
      description: 'Controlled hallucination thesis of consciousness.'
    });

    book2 = await Book.create({
      title: 'The Feeling of Life Itself',
      author: 'Christof Koch',
      year: 2019,
      publisher: 'MIT Press',
      cover: 'http://example.com/koch.jpg',
      description: 'Integrated information theory (IIT).'
    });

    book3 = await Book.create({
      title: 'The Dawn of Mind',
      author: 'James Cooke',
      year: 2024,
      publisher: 'Prometheus Books',
      cover: 'http://example.com/dawn.jpg',
      description: 'Explores consciousness from philosophy to neuroscience, with the thesis that *all* life is conscious.'
    });
  });

  afterAll(async () => {
    await db.query('DELETE FROM books');
    await db.end();
  });


});

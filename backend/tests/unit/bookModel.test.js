const Book = require('../../src/models/Book');

describe('Book Model', () => {
  it('should return an empty array when there are no books', async () => {
    const books = await Book.getAll();
    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBe(0);
  });
})
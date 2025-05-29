const pool = require('../db');

const Book = {
  async getAll() {
    const result = await pool.query('SELECT * FROM books ORDER BY id');
    return result.rows;
  },

  async getById(id) {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    return result.rows[0] || null;
  },

  async create({ title, author, status, description, year, publisher, cover }) {
    const result = await pool.query(
      `INSERT INTO books (title, author, status, description, year, publisher, cover)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, author, status || 'unread', description, year, publisher, cover]
    );
    return result.rows[0];
  },

  async update(id, fields) {
    const { title, author, status, description, year, publisher, cover } = fields;
    const result = await pool.query(
      `UPDATE books 
       SET title = $1, author = $2, status = $3, description = $4, year = $5, publisher = $6, cover = $7
       WHERE id = $8 RETURNING *`,
      [title, author, status, description, year, publisher, cover, id]
    );
    return result.rows[0] || null;
  },

  async delete(id) {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  }
};

module.exports = Book;
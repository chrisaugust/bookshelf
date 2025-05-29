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

  async create({ title, author, status }) {
    const result = await pool.query(
      'INSERT INTO books (title, author, status) VALUES ($1, $2, $3) RETURNING *',
      [title, author, status || 'unread']
    );
    return result.rows[0];
  },

  async update(id, fields) {
    const { title, author, status } = fields;
    const result = await pool.query(
      'UPDATE books SET title = $1, author = $2, status = $3 WHERE id = $4 RETURNING *',
      [title, author, status, id]
    );
    return result.rows[0] || null;
  },

  async delete(id) {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  }
};

module.exports = Book;
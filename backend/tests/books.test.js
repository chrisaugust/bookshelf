const request = require('supertest');
const app = require('../src/app');

describe('Books API', () => {
  it('should return an empty list of books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});
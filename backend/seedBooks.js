require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const books = [
  {
    title: "Being You",
    author: "Anil Seth",
    description: "An overview of the current state of consciousness research, centering on the thesis that conscious experience is a 'controlled hallucination' shaped by the interaction of predictive processing and embodied perception.",
    year: 2021,
    publisher: "Dutton",
    cover: "Being_You.jpg"
  },
  {
    title: "The Feeling of Life Itself",
    author: "Christof Koch",
    description: "An introduction to the integrated information theory (IIT) of consciousness, which attempts to explain how brain processes give rise to subjective experience.",
    year: 2019,
    publisher: "MIT Press",
    cover: "The_Feeling_of_Life_Itself.jpg"
  },
  {
    title: "The Dawn of Mind",
    author: "James Cooke",
    description: "A wide ranging exploration of consciousness, combining Western and Eastern philosophy with findings from neuroscience and biology to explain why it 'feels like something' to exist as a human being, and how this is most likely the case for all life.",
    year: 2024,
    publisher: "Prometheus Books",
    cover: "The_Dawn_of_Mind.jpg"
  }
];

async function seed() {
  try {
    console.log('Seeding books...');
    for (const book of books) {
      await pool.query(
        `INSERT INTO books (title, author, description, year, publisher, cover)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [book.title, book.author, book.description, book.year, book.publisher, book.cover]
      );
    }
    console.log('Seeding complete!');
  } catch (err) {
    console.error('Error seeding books:', err);
  } finally {
    await pool.end();
  }
}

seed();

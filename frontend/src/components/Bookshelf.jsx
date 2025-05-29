import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import BookModal from './BookModal';
import BookForm from './BookForm';

function Bookshelf() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(setBooks)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>📚 Bookshelf</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map(book => (
          <BookCard key={book.id} book={book} onClick={setSelectedBook} />
        ))}
      </div>
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />

      <BookForm onBookCreated={(newBook) => setBooks(prev => [...prev, newBook])} />
    </div>
  );
}

export default Bookshelf;

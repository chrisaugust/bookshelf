function BookCard({ book, onClick }) {
  return (
    <img
      src={book.cover}
      alt={book.title}
      className="book-cover"
      onClick={() => onClick(book)}
      style={{ width: '100px', cursor: 'pointer', margin: '10px' }}
    />
  );
}

export default BookCard;
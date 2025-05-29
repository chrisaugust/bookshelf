import './BookModal.css';

function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img src={book.cover} alt={book.title} style={{ width: '150px' }} />
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <p><em>{book.publisher}, {book.year}</em></p>
        <p>{book.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default BookModal;
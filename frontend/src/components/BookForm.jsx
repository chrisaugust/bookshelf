import { useState } from 'react';

function BookForm({ onBookCreated }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    status: 'unread',
    description: '',
    year: '',
    publisher: '',
    cover: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        onBookCreated(data);
        setFormData({
          title: '', author: '', status: 'unread', description: '',
          year: '', publisher: '', cover: '',
        });
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error('Error creating book:', err);
      alert('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add a New Book</h2>
      {['title', 'author', 'description', 'publisher', 'cover'].map(field => (
        <div key={field}>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            required={field === 'title'}
            style={{ margin: '5px', width: '300px' }}
          />
        </div>
      ))}
      <div>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Year"
          style={{ margin: '5px', width: '100px' }}
        />
      </div>
      <div>
        <select name="status" value={formData.status} onChange={handleChange} style={{ margin: '5px' }}>
          <option value="unread">Unread</option>
          <option value="reading">Reading</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;

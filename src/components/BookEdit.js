import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [bookTitle, setBookTitle] = useState(book.title);

  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, bookTitle);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={bookTitle} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;

import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title }
    ];
    setBooks(updatedBooks);
  };

  const updateBook = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return {
          id,
          title: newTitle
        }
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onUpdate={updateBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

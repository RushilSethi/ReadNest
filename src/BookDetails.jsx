import React from "react";
import { useParams } from "react-router-dom";
import { books } from "./dummyApi";

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="bg-background text-primary min-h-screen p-6">
      <section className="mb-8 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <img
            src={book.cover || "https://via.placeholder.com/150"}
            alt={book.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <p className="text-secondary mb-4">Author: {book.author}</p>
          <p className="text-lg mb-4">{book.description}</p>
          <p className="text-sm text-gray-600">Category: {book.category}</p>
          <p className="text-sm text-accent-tertiary">Rating: {book.rating}</p>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;

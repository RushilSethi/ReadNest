import { Link, useParams } from "react-router-dom";
import { books } from "./dummyApi";
import NoBookSelected from "./NoBookSelected";

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <NoBookSelected />;
  }

  return (
    <div className="bg-background text-primary min-h-screen p-6">
      <section className="mb-8 mt-12">
        <div className="max-w-4xl mx-auto">
        <Link to="/books">
        <button className="bg-accent-primary text-white px-4 py-2 rounded-lg mb-4">
          To Books
        </button>
      </Link>
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

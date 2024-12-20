import { Link, useParams } from "react-router-dom";
import NoBookSelected from "./NoBookSelected";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const books = useSelector(store => store.books.items);
  const { id } = useParams();
  const book = books.find((book) => book.id == id);

  if (!book) {
    return <NoBookSelected />;
  }

  return (
    <div className="bg-background text-primary min-h-screen np-6">
      <section className="mb-8 mt-12">
        <div className="max-w-4xl mx-auto">
        <Link to="/books">
        <button className="bg-accent-primary hover:bg-accent-secondary duration-300 ease-in text-white px-4 py-2 rounded-lg mb-4">
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

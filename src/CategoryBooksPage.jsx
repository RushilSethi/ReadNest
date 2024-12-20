import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import bookPlaceholder from "./assets/book_placeholder.jpeg"

const CategoryBooks = () => {
  const books = useSelector(store => store.books.items);

  const { category } = useParams();

  const [searchQuery, setSearchQuery] = useState("");

  let filteredBooks = category
    ? books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      )
    : books;

  filteredBooks = filteredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const noBooksFound = filteredBooks.length === 0;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-6">
      <section className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for books..."
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-secondary"
        />
      </section>

      {noBooksFound ? (
        <div className="text-center bg-container text-primary p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">No Books Found</h2>
          <p className="text-secondary mb-4">
            We couldn&apos;t find any books under the {category} category or
            matching your search query. Please check the category or go back to
            see all available books.
          </p>
          <Link
            to="/books"
            className="text-accent-primary hover:text-accent-secondary font-semibold"
          >
            Go to Books Page
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <div className="bg-container text-primary rounded-lg shadow hover:shadow-lg transition-shadow">
                <img
                  src={book.cover || bookPlaceholder}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{book.title}</h3>
                  <p className="text-secondary">{book.author}</p>
                  <p className="text-sm mt-2">{book.category}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-accent-tertiary">
                      Rating: {book.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryBooks;

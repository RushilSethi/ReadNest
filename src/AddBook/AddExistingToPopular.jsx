import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToPopularPicks } from "../store/booksSlice";
import bookPlaceholder from "../assets/book_placeholder.jpeg"

const AddExistingToPopular = () => {
  const [searchText, setSearchText] = useState("");
  const books = useSelector((state) => state.books.items); 
  const popularPicks = useSelector((state) => state.books.popularPicks);
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddToPopular = (book) => {
    const isAlreadyPopular = popularPicks.some((item) => item.id === book.id);

    if (!isAlreadyPopular) {
      dispatch(addToPopularPicks(book));
      alert(`${book.title} has been added to Popular Picks!`);
    } else {
      alert(`${book.title} is already in Popular Picks!`);
    }
  };

  return (
    <div className="bg-background text-primary min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-10 mb-4">Add to Popular Picks</h1>
      <p className="text-secondary mb-6">Search for books to add to Popular Picks.</p>

      <input
        type="text"
        placeholder="Search books..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full max-w-md p-3 border border-accent-primary rounded-lg mb-6 outline-none focus:ring-2 focus:ring-accent-secondary transition"
      />

      <div className="w-full max-w-screen-lg overflow-x-scroll flex space-x-4 bg-container p-4 rounded-lg shadow">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="flex-shrink-0 w-40 bg-background border border-accent-primary p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => handleAddToPopular(book)}
            >
              <img
                src={book.cover || bookPlaceholder}
                alt={book.title}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{book.title}</h3>
              <p className="text-sm text-secondary">{book.author}</p>
            </div>
          ))
        ) : (
          <p className="text-secondary text-center w-full">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default AddExistingToPopular;

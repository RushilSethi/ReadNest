import React, { useState } from "react";
import { books } from "./dummyApi";
import { Link } from "react-router-dom";

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background text-primary min-h-screen p-6">
      <section className="text-center mb-8 mt-12">
        <h1 className="text-4xl font-bold mb-2">Browse Books</h1>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-container rounded-lg p-2 w-full md:w-1/2 mx-auto"
        />
      </section>

      <section className="mb-8">
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setSelectedCategory("")}
            className={`p-2 rounded-full ${
              !selectedCategory ? "bg-accent-primary text-white" : "bg-gray-200"
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setSelectedCategory("Fiction")}
            className={`p-2 rounded-full ${
              selectedCategory === "Fiction"
                ? "bg-accent-secondary text-white"
                : "bg-gray-200"
            }`}
          >
            Fiction
          </button>
          <button
            onClick={() => setSelectedCategory("Non-Fiction")}
            className={`p-2 rounded-full ${
              selectedCategory === "Non-Fiction"
                ? "bg-accent-tertiary text-white"
                : "bg-gray-200"
            }`}
          >
            Non-Fiction
          </button>
          <button
            onClick={() => setSelectedCategory("Fantasy")}
            className={`p-2 rounded-full ${
              selectedCategory === "Fantasy"
                ? "bg-accent-primary text-white"
                : "bg-gray-200"
            }`}
          >
            Fantasy
          </button>
          <button
            onClick={() => setSelectedCategory("Science Fiction")}
            className={`p-2 rounded-full ${
              selectedCategory === "Science Fiction"
                ? "bg-accent-secondary text-white"
                : "bg-gray-200"
            }`}
          >
            Science Fiction
          </button>
          <button
            onClick={() => setSelectedCategory("Mystery")}
            className={`p-2 rounded-full ${
              selectedCategory === "Mystery"
                ? "bg-accent-tertiary text-white"
                : "bg-gray-200"
            }`}
          >
            Mystery
          </button>
          <button
            onClick={() => setSelectedCategory("Romance")}
            className={`p-2 rounded-full ${
              selectedCategory === "Romance"
                ? "bg-accent-primary text-white"
                : "bg-gray-200"
            }`}
          >
            Romance
          </button>
          <button
            onClick={() => setSelectedCategory("Horror")}
            className={`p-2 rounded-full ${
              selectedCategory === "Horror"
                ? "bg-accent-secondary text-white"
                : "bg-gray-200"
            }`}
          >
            Horror
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <div
                className="bg-container text-primary rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={book.cover || "https://via.placeholder.com/150"}
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
      </section>
    </div>
  );
};

export default BooksPage;

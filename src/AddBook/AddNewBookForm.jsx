import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addBook, addToPopularPicks } from "../redux/BooksSlice";

const AddNewBookForm = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.items);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    category: "",
    rating: "",
    cover: "",
    addToPopular: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingBook = books.find((book) => book.id === formData.id);
    if (existingBook) {
      setMessage("This book already exists in the library.");
      return;
    }

    const newBook = {
      id: formData.id,
      title: formData.title,
      author: formData.author,
      category: formData.category,
      rating: parseFloat(formData.rating),
      cover: formData.cover || "https://via.placeholder.com/150",
    };

    dispatch(addBook(newBook));
    if (formData.addToPopular) {
      dispatch(addToPopularPicks(newBook));
    }

    setMessage("Book successfully added!");
    setFormData({
      id: "",
      title: "",
      author: "",
      category: "",
      rating: "",
      cover: "",
      addToPopular: false,
    });
  };

  return (
    <div className="bg-background text-primary min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mt-10 mb-8">Add a New Book</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-container p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="id" className="block text-secondary mb-1">
            Book ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            className="w-full p-2 border border-border-color rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-secondary mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border border-border-color rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-secondary mb-1">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full p-2 border border-border-color rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-secondary mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border border-border-color rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-secondary mb-1">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            required
            className="w-full p-2 border border-border-color rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cover" className="block text-secondary mb-1">
            Cover URL (optional)
          </label>
          <input
            type="url"
            id="cover"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            className="w-full p-2 border border-border-color rounded"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center text-secondary">
            <input
              type="checkbox"
              name="addToPopular"
              checked={formData.addToPopular}
              onChange={handleChange}
              className="mr-2"
            />
            Add this book to popular books as well?
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-accent-primary text-white py-2 rounded-lg shadow duration-200 ease-in hover:bg-accent-secondary transition"
        >
          Add Book
        </button>
      </form>
      {message && <p className="text-accent-primary mt-4">{message}</p>}
    </div>
  );
};

export default AddNewBookForm;

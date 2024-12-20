import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook, addToPopularPicks } from "../store/booksSlice";

const AddNewBookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.items);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    description: "",
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
      [name]: (type === "checkbox") ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = formData.title.trim();
    const trimmedAuthor = formData.author.trim();
    const trimmedDescription = formData.description.trim();
    const trimmedCategory = formData.category.trim();

    if (!trimmedTitle || !trimmedAuthor || !trimmedDescription || !trimmedCategory) {
      setMessage("Please fill out all required fields.");
      return;
    }

    if (formData.rating > 5 || formData.rating < 0) {
      setMessage("Rating must be between 0 and 5.");
      return;
    }

    const existingBook = books.find((book) => book.id === formData.id);
    if (existingBook) {
      setMessage("This Book ID already exists in the library.");
      return;
    }

    const newBook = {
      id: formData.id,
      title: trimmedTitle,
      author: trimmedAuthor,
      description: trimmedDescription,
      category: trimmedCategory,
      rating: parseFloat(formData.rating),
      cover: formData.cover || "https://via.placeholder.com/150",
    };

    const newBookPopularInfo = {
      id: formData.id,
      title: trimmedTitle,
      author: trimmedAuthor,
      cover: formData.cover || "https://via.placeholder.com/150",
    };

    dispatch(addBook(newBook));
    if (formData.addToPopular) {
      dispatch(addToPopularPicks(newBookPopularInfo));
    }

    setMessage("Book successfully added!");
    setFormData({
      id: "",
      title: "",
      author: "",
      description: "",
      category: "",
      rating: "",
      cover: "",
      addToPopular: false,
    });
    navigate("/books");
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
            type="number"
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
          <label htmlFor="description" className="block text-secondary mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
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

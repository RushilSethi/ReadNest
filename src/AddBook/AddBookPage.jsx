import React from "react";
import { Link } from "react-router-dom";

const AddBookPage = () => {
  return (
    <div className="bg-background text-primary min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Add a Book</h1>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full">
        <Link
          to="/add-new-book"
          className="flex-1 bg-accent-primary text-white px-6 py-3 w-full max-w-xs md:max-w-[30%] rounded-lg shadow duration-200 ease-in hover:bg-accent-secondary transition flex items-center justify-center"
        >
          Add a New Book
        </Link>
        <Link
          to="/add-existing-to-popular"
          className="flex-1 bg-accent-primary text-white px-6 py-3 w-full max-w-xs md:max-w-[30%] rounded-lg shadow duration-200 ease-in hover:bg-accent-tertiary hover:text-secondary transition flex items-center justify-center"
        >
          Add Existing Book to Popular Picks
        </Link>
      </div>
    </div>
  );
};

export default AddBookPage;

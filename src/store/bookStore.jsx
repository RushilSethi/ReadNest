import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./BooksSlice.jsx";

const bookStore = configureStore({
    reducer: {
        books: booksSlice,
    }
});

export default bookStore;
import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSlice.jsx";

const bookStore = configureStore({
    reducer: {
        books: booksSlice,
    }
});

export default bookStore;
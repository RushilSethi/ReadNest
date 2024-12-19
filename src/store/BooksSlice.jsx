import { createSlice } from "@reduxjs/toolkit";
import { books, popularPicks } from "../dummyApi";

const booksSlice = createSlice({
    name: "books",
    initialState: {
        items: books,
        popularPicks: popularPicks
    },
    reducers: {
        addBook: (state, action) => {
            state.items.push(action.payload);
        },
        addToPopularPicks: (state, action) => {
            state.popularPicks.push(action.payload);
        }
    },
});

export const { addBook, addToPopularPicks } = booksSlice.actions;
export default booksSlice.reducer;
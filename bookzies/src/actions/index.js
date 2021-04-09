import {SEARCH_BOOKS,CHOSEN_BOOK} from "./types";
import {booksCall} from "../api/books";

export const searchBooks = (search)=> async dispatch => {
const response = await booksCall(search);
dispatch({type: SEARCH_BOOKS, payload:{term: search, books: response}});
}

export const chooseBook = book => {
    return {type: CHOSEN_BOOK, payload: book}
}
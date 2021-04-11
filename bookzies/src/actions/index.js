import {SEARCH_BOOKS, CHOSEN_BOOK, CHANGE_TERM, RESET_BOOKS} from "./types";
import {booksCall} from "../api/books";

export const searchBooks = (search) => async dispatch => {
    const response = await booksCall(search);
    dispatch({
        type: SEARCH_BOOKS, payload: {
            term: search,
            books: response
        }
    });
}

export const chooseBook = book => {
    return {type: CHOSEN_BOOK, payload: book}
}

export const changeTerm = term => {
    return {type: CHANGE_TERM, payload: term}
};

export const resetBooks = ()=> {
    return {type: RESET_BOOKS, payload: []}
}
import {expect} from '@jest/globals';
import {booksReducer} from '../../reducers/booksReducer';
import {CHOSEN_BOOK, SEARCH_BOOKS} from "../../actions/types";

test("booksReducer.js is defined", () => {
    expect(booksReducer).toBeDefined();
});

test("booksReducer changes state depending on action input", () => {
    const action = {type: SEARCH_BOOKS, payload: ["Book One", "Book Two"]};
    expect(booksReducer({}, action)).toEqual(["Book One", "Book Two"]);
});

test("booksReducer changes chosen and term properties of books state", () => {
    const action = {type: CHOSEN_BOOK, payload: {bookTitle: "Book Three"}};
    const defaultState = {term: "three", books: ["Book One", "Book Two"], chosen: {bookTitle: "Book One"}};
    const newState = booksReducer(defaultState, action);

    expect(newState.books).toEqual([]);
    expect(newState.term).toEqual("Book Three");
    expect(newState.chosen.bookTitle).toEqual("Book Three");
});
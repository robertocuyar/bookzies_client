import {expect} from '@jest/globals';
import {booksReducer} from '../../reducers/booksReducer';
import {CHOSEN_BOOK, SEARCH_BOOKS} from "../../actions/types";
import {changeTerm, resetBooks} from "../../actions";

const defaultState = {term: "three", books: ["Book One", "Book Two"], chosen: {bookTitle: "Book One"}};

test("booksReducer.js is defined", () => {
    expect(booksReducer).toBeDefined();
});

test("booksReducer changes state depending on action input", () => {
    const action = {type: SEARCH_BOOKS, payload: ["Book One", "Book Two"]};
    expect(booksReducer({}, action)).toEqual(["Book One", "Book Two"]);
});

test("booksReducer changes chosen and term properties of books state", () => {
    const action = {type: CHOSEN_BOOK, payload: {bookTitle: "Book Three"}};
    const newState = booksReducer(defaultState, action);

    expect(newState.books).toEqual([]);
    expect(newState.term).toEqual("Book Three");
    expect(newState.chosen.bookTitle).toEqual("Book Three");
});

test("booksReducer changes term properties with changeTerm action while chosen and books properties remains the same.", () => {
    const newState = booksReducer(defaultState, changeTerm("hi"));

    expect(newState.books).toEqual(["Book One", "Book Two"]);
    expect(newState.term).toEqual("hi");
    expect(newState.chosen.bookTitle).toEqual("Book One");
});

test("booksReducer changes books properties to [] while other properties remain the same", () => {
    const newState = booksReducer(defaultState, resetBooks());

    expect(newState.books).toEqual([]);
    expect(newState.term).toEqual("three");
    expect(newState.chosen.bookTitle).toEqual("Book One");
});
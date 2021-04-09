import {expect} from '@jest/globals';
import {booksReducer} from '../../reducers/booksReducer';
import {SEARCH_BOOKS} from "../../actions/types";

test("booksReducer.js is defined", ()=>{
    expect(booksReducer).toBeDefined();
});

test("booksReducer changes state depending on action input", ()=>{
    const action = {type: SEARCH_BOOKS, payload: ["Book One", "Book Two"]};
   expect(booksReducer([], action)) .toEqual(["Book One", "Book Two"]);
});
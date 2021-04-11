import {expect} from '@jest/globals';
import {SEARCH_BOOKS, CHOSEN_BOOK, CHANGE_TERM, RESET_BOOKS} from '../../actions/types';

test("SEARCH_BOOKS returns the correct string", () => {
    expect(SEARCH_BOOKS).toEqual("SEARCH_BOOKS");
});

test("CHOSEN_BOOK returns the correct string", () => {
    expect(CHOSEN_BOOK).toEqual("CHOSEN_BOOK");
});

test("CHANGE_TERM returns the correct string", () => {
    expect(CHANGE_TERM).toEqual("CHANGE_TERM");
});

test("RESET_BOOKS returns the correct string", () => {
   expect(RESET_BOOKS).toEqual("RESET_BOOKS");
});
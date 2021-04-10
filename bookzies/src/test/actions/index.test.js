import {expect} from '@jest/globals';
import {searchBooks, chooseBook} from "../../actions/index";
import {CHOSEN_BOOK} from "../../actions/types";

test("searchBooks is defined", () => {
    expect(searchBooks).toBeDefined();
});

test("chooseBook is defined", () => {
    expect(chooseBook).toBeDefined();
});

test("chooseBook returns correct object", () => {
    expect(chooseBook({bookTitle: "Book"})).toEqual({type: CHOSEN_BOOK, payload: {bookTitle: "Book"}});
});
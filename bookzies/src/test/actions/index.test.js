import {expect} from '@jest/globals';
import {searchBooks, chooseBook, changeTerm, resetBooks} from "../../actions/index";
import {CHOSEN_BOOK, CHANGE_TERM, RESET_BOOKS} from "../../actions/types";

test("searchBooks is defined", () => {
    expect(searchBooks).toBeDefined();
});

test("chooseBook is defined", () => {
    expect(chooseBook).toBeDefined();
});

test("chooseBook returns correct object", () => {
    expect(chooseBook({bookTitle: "Book"})).toEqual({type: CHOSEN_BOOK, payload: {bookTitle: "Book"}});
});

test("changeTerm is defined", () => {
    expect(changeTerm).toBeDefined();
});

test("changeTerm returns correct object", () => {
    expect(changeTerm("hello")).toEqual({
        type: CHANGE_TERM,
        payload: "hello"
    });
});

test("resetBooks is defined", ()=>{
   expect(resetBooks).toBeDefined();
});

test("resetBooks returns correct [] as payload.", ()=> {
   expect(resetBooks()).toEqual({
       type: RESET_BOOKS,
       payload: []
   })
});
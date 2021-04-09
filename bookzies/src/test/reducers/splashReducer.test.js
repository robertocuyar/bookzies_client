import {expect} from '@jest/globals';
import {splashReducer} from '../../reducers/splashReducer';
import {CHOSEN_BOOK} from '../../actions/types';

test("booksReducer.js is defined", ()=>{
    expect(splashReducer).toBeDefined();
});

test("booksReducer changes state depending on action input", ()=>{
    const action = {type: CHOSEN_BOOK, payload: {bookName: "Book Two"}};
    expect(splashReducer({}, action)) .toEqual({bookName: "Book Two"});
});
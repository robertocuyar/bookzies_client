import {expect} from '@jest/globals';
import {SEARCH_BOOKS, CHOSEN_BOOK} from '../../actions/types';

test("SEARCH_BOOKS returns the correct string", ()=>{
   expect(SEARCH_BOOKS).toEqual("SEARCH_BOOKS");
});

test("CHOSEN_BOOK returns the correct string", ()=>{
   expect(CHOSEN_BOOK).toEqual("CHOSEN_BOOK");
})
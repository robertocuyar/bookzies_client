import {expect} from '@jest/globals';
import {SEARCH_BOOKS} from '../../actions/types';

test("SEARCH_BOOKS returns the correct string", ()=>{
   expect(SEARCH_BOOKS).toEqual("SEARCH_BOOKS");
});
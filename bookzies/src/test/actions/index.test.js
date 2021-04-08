import {expect} from '@jest/globals';
import {searchBooks} from "../../actions/index";

test("searchBooks is defined", ()=>{
   expect(searchBooks).toBeDefined();
});
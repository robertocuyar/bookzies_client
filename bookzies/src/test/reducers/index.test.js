import {expect} from "@jest/globals";
import index from "../../reducers/index";
import {createStore} from "redux";

test("Reducers index.js is defined", ()=>{
   expect(index).toBeDefined();
});

test("Reducer index contains all reducers in app", ()=>{
   let storeTest = createStore(index).getState();

   expect(storeTest.books).toEqual({});
})
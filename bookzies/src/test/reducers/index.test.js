import {expect} from "@jest/globals";
import index from "../../reducers/index";
import {createStore} from "redux";

test("Reducers index.js is defined", ()=>{
   expect(index).toBeDefined();
});
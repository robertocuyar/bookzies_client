import {combineReducers} from "redux";
import {booksReducer} from "./booksReducer";
import {splashReducer} from "./splashReducer";

export default combineReducers({
        books: booksReducer,
        choice: splashReducer
});
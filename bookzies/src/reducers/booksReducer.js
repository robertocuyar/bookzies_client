import {SEARCH_BOOKS} from "../actions/types";
import {CHOSEN_BOOK} from "../actions/types";

export const booksReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_BOOKS:
            return {...state, term: action.payload.term, books: action.payload.books};
        case CHOSEN_BOOK:
            return {...state, term: action.payload.bookTitle, chosen: action.payload, books: []};
        default:
            return state
    }
}
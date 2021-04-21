import {CHANGE_TERM, RESET_BOOKS, SEARCH_BOOKS} from "../actions/types";
import {CHOSEN_BOOK} from "../actions/types";

export const booksReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_BOOKS:
            return {...state, previousTerm: action.payload.term, books: action.payload.books};
        case CHOSEN_BOOK:
            return {...state, term: action.payload.bookTitle, chosen: action.payload, books: [], followChoice: true};
        case CHANGE_TERM:
            return {...state, term: action.payload, followChoice: false};
        case RESET_BOOKS:
            return {...state, books: []}
        default:
            return state
    }
}
import {SEARCH_BOOKS} from "../actions/types";

export const booksReducer = (state = [], action) => {
    switch(action.type){
        case SEARCH_BOOKS:
            return action.payload;
        default:
            return state
    }
}
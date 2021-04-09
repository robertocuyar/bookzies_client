import {CHOSEN_BOOK} from "../actions/types";

export const splashReducer = (state = {}, action) => {
    switch(action.type){
        case CHOSEN_BOOK:
            return action.payload;
        default:
            return state
    }
}
import {LOAD_USERS, SET_CURRENT_PAGE, SET_ERROR} from "./actionTypes";

const initialState = {
    users: [],
    page: 1,
    perPage: 2,
    total: null,
    pages: null,
    error: null
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: [...action.payload.data],
                pages: Math.ceil(action.payload.total / state.perPage),
                total: action.payload.total,
                error: null
            }
        case SET_CURRENT_PAGE:
            return {...state, page: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }

}

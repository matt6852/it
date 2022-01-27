import {FOLLOWED, LOAD_USERS, SET_CURRENT_PAGE, SET_ERROR, UNFOLLOWED} from "./actionTypes";

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
                users: [...action.payload.items],
                pages: Math.ceil(action.payload.totalCount / state.perPage),
                total: action.payload.totalCount,
                error: null
            }
        case FOLLOWED:
            const followedFriends = state.users.map((user) => user.id === action.payload.payload.id ? action.payload.payload : user)
            return {...state, users: followedFriends}
        case UNFOLLOWED:
            const unfollowedFriends = state.users.map((user) => user.id === action.payload.payload.id ? action.payload.payload : user)
            return {...state, users: unfollowedFriends}
        case SET_CURRENT_PAGE:
            return {...state, page: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }

}

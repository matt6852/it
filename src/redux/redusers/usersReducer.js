import {
    FOLLOWED,
    LOAD_USERS,
    SET_CURRENT_PAGE,
    SET_ERROR,
    UNFOLLOWED,
    ISLOADING,
    FOLLOWED_OR_UNFOLLOW
} from "./actionTypes";


const initialState = {
    users: [],
    page: 1,
    perPage: 10,
    total: null,
    pages: null,
    error: null,
    isLoading: false,
    toggleFriends: []


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
        case FOLLOWED_OR_UNFOLLOW:
            const toggleFriends = state.users.filter((user) => user.id === action.payload)
            return {...state, toggleFriends}

        case SET_CURRENT_PAGE:
            return {...state, page: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        case ISLOADING:
            return {...state, isLoading: action.payload}

        default:
            return state
    }

}

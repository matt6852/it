import {
    SET_ME
} from "./actionTypes";


const initialState = {
    email: null,
    id: null,
    login: null,
    isLoggedIn: false,
    isFirstLoading: true


}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ME:
            return {
                ...state, ...action.payload,

            }

        default:
            return state
    }

}

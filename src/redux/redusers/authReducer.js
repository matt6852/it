import {
    SET_ME
} from "./actionTypes";


const initialState = {
    email: null,
    id: null,
    login: null,
    isLoggedIn: false


}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ME:
            return {
                ...state, ...action.payload,
                isLoggedIn: true
            }
        default:
            return state
    }

}

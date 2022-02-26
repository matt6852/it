import {LOG_OUT, LOGIN} from "./actionTypes";


const initialState = {
    email: null,
    password: null,
    rememberMe: null,
    userID: null,
    loggedIn: false


}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:

            const {data, userID} = action.payload
            if (userID) {
                return {...state, ...data, userID, loggedIn: true}
            }
            return {...state, ...data, userID, loggedIn: false}

        case LOG_OUT:
            return {...state, loggedIn: false}
        default:
            return state
    }


}
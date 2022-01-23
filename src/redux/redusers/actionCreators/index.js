import {
    ADD_MESSAGE,
    ADD_POST,
    SET_MESSAGE_VALUE,
    SET_POST_VALUE,
    LOAD_USERS,
    SET_CURRENT_PAGE

} from "../actionTypes";

export const addPostAction = (text) => ({type: ADD_POST, payload: text})
export const addPostValueHandlerAction = (text) => ({type: SET_POST_VALUE, payload: text})
export const addMessageAction = (text) => ({type: ADD_MESSAGE, payload: text})
export const addMessageValueHandlerAction = (text) => ({type: SET_MESSAGE_VALUE, payload: text})

export const loadUsers = (users) => ({type: LOAD_USERS, payload: users})
export const setPage = (newPage) => ({type: SET_CURRENT_PAGE, payload: newPage})
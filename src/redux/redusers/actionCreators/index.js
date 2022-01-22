import {
    ADD_MESSAGE,
    ADD_POST,
    SET_MESSAGE_VALUE,
    SET_POST_VALUE,
    LOAD_USERS,
    FOLLOW_USER,
    UNFOLLOW_USER
} from "../actionTypes";

export const addPostAction = (text) => ({type: ADD_POST, payload: text})
export const addPostValueHandlerAction = (text) => ({type: SET_POST_VALUE, payload: text})
export const addMessageAction = (text) => ({type: ADD_MESSAGE, payload: text})
export const addMessageValueHandlerAction = (text) => ({type: SET_MESSAGE_VALUE, payload: text})
export const followUserAction = (id) => ({type: FOLLOW_USER, payload: id})
export const unfollowUserAction = (id) => ({type: UNFOLLOW_USER, payload: id})
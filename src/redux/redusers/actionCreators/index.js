import {
    ADD_MESSAGE,
    ADD_POST,
    SET_MESSAGE_VALUE,
    SET_POST_VALUE,
    LOAD_USERS,
    SET_CURRENT_PAGE,
    SET_ERROR, ISLOADING,
    SETPROFILE,
    FOLLOWED_OR_UNFOLLOW, SET_ME,
} from "../actionTypes";

export const addPostAction = (text) => ({type: ADD_POST, payload: text})
export const addPostValueHandlerAction = (text) => ({type: SET_POST_VALUE, payload: text})
export const addMessageAction = (text) => ({type: ADD_MESSAGE, payload: text})
export const addMessageValueHandlerAction = (text) => ({type: SET_MESSAGE_VALUE, payload: text})

export const loadUsers = (users) => ({type: LOAD_USERS, payload: users})
export const setPage = (newPage) => ({type: SET_CURRENT_PAGE, payload: newPage})
export const getError = (error) => ({type: SET_ERROR, payload: error})

export const isLoading = (toggle) => ({type: ISLOADING, payload: toggle})
export const setProfile = (profile) => ({type: SETPROFILE, payload: profile})
export const followOrUnfollow = (id) => ({type: FOLLOWED_OR_UNFOLLOW, payload: id})
export const setMe = (data) => ({type: SET_ME, payload: data})
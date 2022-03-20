import {
    ADD_MESSAGE,
    ADD_POST,
    SET_MESSAGE_VALUE,
    SET_POST_VALUE,
    LOAD_USERS,
    SET_CURRENT_PAGE,
    SET_ERROR, ISLOADING,
    SETPROFILE,
    FOLLOWED_OR_UNFOLLOW, SET_ME, UPDATE_STATUS, GET_STATUS,
    LOGIN, LOG_OUT, SEND_PHOTO, SAVE_PHOTO
} from "../actionTypes";
import {samuraiAPI} from "../../../dal/api";

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
export const setStatus = (status) => ({type: UPDATE_STATUS, payload: status})
export const setPhoto = (file) => ({type: SAVE_PHOTO, payload: file})
export const getStatus = (status) => ({type: GET_STATUS, payload: status})
export const login = (data) => ({type: LOGIN, payload: data})
export const logOut = (data) => ({type: LOG_OUT,})


//thunks async requests

export const getUsersThunk = (page, perPage) => (dispatch) => {

    dispatch(isLoading(true))
    samuraiAPI.getUsers(page, perPage)
        .then((res) => {
            dispatch(loadUsers(res.data))
            dispatch(isLoading(false))
        })
        .catch(error => {
            dispatch(getError(error))
            dispatch(isLoading(false))
        })
}

export const followOrUnFollowThunk = (id, method, page, perPage) => (dispatch) => {

    if (method === "post") {
        dispatch(isLoading(true))
        samuraiAPI.followAUser(id)
            .then((res) => {
                if (res.data.resultCode !== 1) {
                    dispatch(getUsersThunk(page, perPage))
                    dispatch(followOrUnfollow(id))
                }
            }).catch(error => {
            dispatch(getError(error))
            dispatch(isLoading(false))
        })
    }
    if (method === "delete") {
        dispatch(isLoading(true))
        samuraiAPI.unFollowAUser(id)
            .then((res) => {
                if (res.data.resultCode !== 1) {
                    dispatch(getUsersThunk(page, perPage))
                    dispatch(followOrUnfollow(id))
                    dispatch(isLoading(false))
                }
            }).catch(error => {
            dispatch(getError(error))
            dispatch(isLoading(false))
        })
    }

}

export const authMeThunk = () => (dispatch) => {
    // dispatch(isLoading(true))
    samuraiAPI.authMe().then(({data: {data}}) => {
            if (data.login) {
                let payload = {...data, isLoggedIn: true, isFirstLoading: false}
                dispatch(setMe(payload))
                // dispatch(isLoading(false))

            } else if (!data.login) {
                dispatch(setMe({isLoggedIn: false, isFirstLoading: false}))
                // dispatch(isLoading(false))
            }

        }
    )

}

export const setProfileThunk = (userId) => (dispatch) => {

    samuraiAPI.getProfile(+userId)
        .then((res) => {
            dispatch(setProfile(res.data))
            dispatch(isLoading(false))
        }).catch(error => {
        dispatch(getError(error))
        dispatch(isLoading(false))
    })

}


export const setUserStatusThunk = (status) => (dispatch) => {
    samuraiAPI.setStatus(status).then((res) => {
        dispatch(setStatus(status))
    }).catch(err => dispatch(getError(err)))

}
export const sendUserPhoto = (file) => (dispatch) => {
    samuraiAPI.sendFile(file).then((res) => {
        console.log(res)
        if (res.data.resultCode !== 1) {
            // dispatch(setProfileThunk())
            console.log(res.data.data.photos)
            const file = res.data.data.photos
            dispatch(setPhoto(file))
        }
        if (res.data.resultCode === 1) {
            console.log("ONE")
        }

    }).catch(err => dispatch(getError(err)))

}


export const getUserStatusThunk = (id) => (dispatch) => {
    samuraiAPI.getStatus(id).then((res) => {
        dispatch(getStatus(res.data))
    }).catch(err => dispatch(getError(err)))

}
export const logMein = (data) => (dispatch) => {
    // dispatch(isLoading(true))
    const {email, password} = data
    console.log(data)
    samuraiAPI.loginMe(email, password).then((res) => {
            // console.log(res)
            dispatch(login({data, userID: res.data.data.userId}))
            dispatch(setMe({isLoggedIn: true}))
            // dispatch(isLoading(false))
        }
    ).catch(err => {
        console.log(err)
        dispatch(getError(err))
        // dispatch(isLoading(false))
    })
}

export const logOutThunk = () => (dispatch) => {
    // dispatch(isLoading(true))
    samuraiAPI.logMeOut().then((res) => {
            dispatch(logOut())
            dispatch(setMe({isLoggedIn: false}))
            // dispatch(isLoading(false))
        }
    ).catch(err => {
        console.log(err)
        dispatch(getError(err))
        // dispatch(isLoading(false))
    })
}
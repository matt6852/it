import {ADD_POST, GET_STATUS, SET_POST_VALUE, SETPROFILE, UPDATE_STATUS} from "./actionTypes";


const initialState = {
    postsData: [
        {id: 1, message: "Hi how are you", likeCount: 23},
        {id: 2, message: "BOOOOOO", likeCount: 12},
        {id: 3, message: "Whats up???", likeCount: 1},
    ],
   
    profile: null,
    status: ""

}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: new Date().getMilliseconds().toString(), message: action.payload, likeCount: 2}

            return {...state, postsData: [...state.postsData, newPost], textAreaValue: ""}

        case SETPROFILE :
            return {...state, profile: action.payload}
        case UPDATE_STATUS :
            return {...state, status: action.payload}
        case GET_STATUS :
            return {...state, status: action.payload}
        default:
            return state
    }


}
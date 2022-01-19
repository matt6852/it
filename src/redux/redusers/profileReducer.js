import {ADD_POST, SET_POST_VALUE} from "./actionTypes";


const initialState = {
    postsData: [
        {id: 1, message: "Hi how are you", likeCount: 23},
        {id: 2, message: "BOOOOOO", likeCount: 12},
        {id: 3, message: "Whats up???", likeCount: 1},
    ],
    textAreaValue: "",

}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: new Date().getMilliseconds().toString(), message: action.payload, likeCount: 2}

            return {...state, postsData: [...state.postsData, newPost], textAreaValue: ""}
        case SET_POST_VALUE:
           
            return {...state, textAreaValue: action.payload}
        default:
            return state
    }


}
import {ADD_MESSAGE, SET_MESSAGE_VALUE} from "./actionTypes";

const initialState = {
    dialogsData: [
        {
            id: "1", name: "Dimych"
        }, {
            id: "2", name: "Sveta"
        }, {
            id: "3", name: "Andrey"
        }
        , {
            id: "4", name: "Victor"
        }
    ],
    messageData: [
        {
            id: "1", message: "hi"
        }, {
            id: "2", message: "hello"
        }, {
            id: "3", message: "yooooooo"
        }

    ],


}

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: new Date().getMilliseconds().toString(), message: action.payload, likeCount: 2}
            return {...state, messageData: [...state.messageData, newMessage]}
        default:
            return state

    }

}
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

    dialogTextAreaValue: ""

}

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE_VALUE:

            return {...state, dialogTextAreaValue: action.payload}
        case ADD_MESSAGE:
            const newMessage = {id: new Date().getMilliseconds().toString(), message: action.payload, likeCount: 2}
            // state.messageData.push(newMessage)
            // state.dialogTextAreaValue = ""
            return {...state, dialogTextAreaValue: "", messageData: [...state.messageData, newMessage]}
        default:
            return state

    }

}
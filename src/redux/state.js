import {profileReducer} from "./redusers/profileReducer";
import {dialogReducer} from "./redusers/dialogReducer";

const store = {


    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi how are you", likeCount: 23},
                {id: 2, message: "BOOOOOO", likeCount: 12},
                {id: 3, message: "Whats up???", likeCount: 1},
            ],
            textAreaValue: "",

        },
        messagesPage: {
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

        },

    },
    _callSubscriber() {
        console.log("rerender state")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)

    },


}

window.store = store
export default store
const ADD_POST = "ADD_POST"
const SET_POST_VALUE = "SET_POST_VALUE"
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
        if (action.type === ADD_POST) {
            const newPost = {id: 6, message: action.payload, likeCount: 2}
            this._state.profilePage.postsData.push(newPost)
            // console.log(newPost)
            this._state.profilePage.textAreaValue = ""
            this._callSubscriber(this._state)

        } else if (action.type === SET_POST_VALUE) {
            // console.log(action.payload)
            this._state.profilePage.textAreaValue = action.payload
            this._callSubscriber(this._state)
        }


    },


}
export const addPostAction = (text) => ({type: ADD_POST, payload: text})
export const addPostValueHandlerAction = (text) => ({type: SET_POST_VALUE, payload: text})
window.store = store
export default store
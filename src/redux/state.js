// let rerenderEntireTree
//
// const myState = {
//     profilePage: {
//         postsData: [
//             {id: 1, message: "Hi how are you", likeCount: 23},
//             {id: 2, message: "BOOOOOO", likeCount: 12},
//             {id: 3, message: "Whats up???", likeCount: 1},
//         ],
//         textAreaValue: ""
//     },
//     messagesPage: {
//         dialogsData: [
//             {
//                 id: "1", name: "Dimych"
//             }, {
//                 id: "2", name: "Sveta"
//             }, {
//                 id: "3", name: "Andrey"
//             }
//             , {
//                 id: "4", name: "Victor"
//             }
//         ],
//         messageData: [
//             {
//                 id: "1", message: "hi"
//             }, {
//                 id: "2", message: "hello"
//             }, {
//                 id: "3", message: "yooooooo"
//             }
//
//         ],
//
//
//     },
//
// }
//
// export function addPost(text) {
//
//     const newPost = {id: 6, message: text, likeCount: 2}
//     myState.profilePage.postsData.push(newPost)
//     // console.log(newPost)
//     myState.profilePage.textAreaValue = ""
//     rerenderEntireTree(myState)
// }
//
// export function handleTextAreaValue(value) {
//     myState.profilePage.textAreaValue = value
//     rerenderEntireTree(myState)
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer
// }


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

    getState() {
        return this._state
    },

    rerenderEntireTree() {
        console.log("rerender state")
    },


    addPost(text) {
        // console.log("add")
        const newPost = {id: 6, message: text, likeCount: 2}
        this._state.profilePage.postsData.push(newPost)
        // console.log(newPost)
        this._state.profilePage.textAreaValue = ""
        this.rerenderEntireTree(this._state)
    },
    handleInput(value) {
        console.log(value)
        this._state.profilePage.textAreaValue = value
        this.rerenderEntireTree(this._state)
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    }

}
window.store = store
export default store
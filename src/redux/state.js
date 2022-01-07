const myState = {
    profilePage: {

        postsData: [
            {
                id: 1, message: "Hi how are you",
                likeCount: 23
            },
            {id: 2, message: "BOOOOOO", likeCount: 12},
            {id: 3, message: "Whats up???", likeCount: 1},
        ]

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

        ]

    }


}

export default myState
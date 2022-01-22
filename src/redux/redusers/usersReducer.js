import {FOLLOW_USER, UNFOLLOW_USER, LOAD_USERS} from "./actionTypes";

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Anna",
            status: "Go to the gym",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 2,
            followed: false,
            fullName: "Rita",
            status: "Go to the toilet",
            location: {city: "Tambov", country: "Russia"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Nina",
            status: "Im sleeping",
            location: {city: "Minsk", country: "Belarus"}
        }
    ]
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return state
        case  FOLLOW_USER:
            const followedArr = state.users.map((user) => user.id === action.payload ? {...user, followed: true} : user)
            return {...state, users: followedArr}
        case  UNFOLLOW_USER:
            const unfollowedArr = state.users.map((user) => user.id === action.payload ? {
                ...user,
                followed: false
            } : user)
            return {...state, users: unfollowedArr}
        default:
            return state
    }

}

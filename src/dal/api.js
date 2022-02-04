import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '22bb40d0-b492-49ae-8509-f66045cc7be0',
    }

});

// const users = axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
//     {
//         withCredentials: true,
//         headers: {
//             'API-KEY': '22bb40d0-b492-49ae-8509-f66045cc7be0',
//         }
//     }
// )


export const samuraiAPI = {
    getUsers(page, count) {
        return instance.get(`/users?page=${page}&count=${count}`)
    },
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },
    followAUser(id) {
        return instance.post(`/follow/${id}`)
    },
    unFollowAUser(id) {
        return instance.delete(`/follow/${id}`)
    }
}

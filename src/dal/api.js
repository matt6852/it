import axios from "axios";
import context from "react-redux/lib/components/Context";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0ad0a05b-cef3-4264-8afe-598e847c67e0',
    }

});


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
    },
    authMe() {
        return instance.get("/auth/me")
    },
    setStatus(status) {
        return instance.put("/profile/status", {status})

    },
    getStatus(id) {
        return instance.get(`/profile/status/${id}`)
    },
    loginMe(email, password, rememberMe = true) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logMeOut() {
        return instance.delete(`/auth/login`)
    },
    sendFile(file) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(`/profile/photo`,
            formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
    }


}

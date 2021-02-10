import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "100135da-520e-4d3e-bbd2-c947ccf46727"
    }
})
export const userAPI = {
    getUser(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data);
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(loginData) {
        return instance.post(`auth/login`,{loginData}).then(response=>response.data)
    },
    deleteLogin(){
        return instance.delete('auth/login').then(response=>response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status:status}).then(response => response.data)
    }
}

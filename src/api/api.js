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
        return instance.get(`users?count=${pageSize}&page=${currentPage}`, {
            withCredentials: true
        }).then(response => response.data);
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
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+userId).then(response => response.data)
    }
}

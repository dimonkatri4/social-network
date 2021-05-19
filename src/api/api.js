import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "100135da-520e-4d3e-bbd2-c947ccf46727"
    }
})
export const userAPI = {
    getUser(pageSize, currentPage, friends) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}&friend=${friends}`).then(response => response.data);
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
    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            }).then(response => response.data)
    },
    updateProfileInfo(profile) {
        return instance.put(`profile/`, {...profile}).then(response => response.data)
    }
}

export const captchaAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then(response => response.data)
    }
}

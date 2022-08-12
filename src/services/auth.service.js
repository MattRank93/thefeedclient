import axios from "axios";

const API_URL = "http://helpapp.ddns.net:3007/api/auth/";

const register = (submit) => {
    return axios.post(API_URL + "tcadmin", submit, {headers: ""})
        .then((response) => {
            return response.data;
        });
};

const login = (user) => { //
    const loginRequest = {
        email: user.email,
        password: user.password,
        role: "ROLE_TCADMIN"
    }

    return axios.post(API_URL + "login", loginRequest, {headers: {}})
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
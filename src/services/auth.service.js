import axios from "axios";

const API_URL = "http://localhost:7886/";

const register = (submit) => {
    return axios.post(API_URL + "authenticate/register", submit, {headers: ""})
        .then((response) => {
            return response.data;
        });
};

const login = (submit) => {
    return axios.patch(API_URL + "authenticate/login", submit, {headers: ""})
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};



export default {
    register,
    login
};
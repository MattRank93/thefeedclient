import axios from "axios";

const API_URL = "http://localhost:7886/users/";

const register = (submit) => {
    return axios.post(API_URL + "register", submit, {headers: ""})
        .then((response) => {
            return response.data;
        });
};


export default {
    register,
};
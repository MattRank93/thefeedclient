import axios from "axios";

const API_URL = "http://localhost:7886/";

const register = (submit) => {
    return axios.post(API_URL + "authenticate/register", submit, {headers: ""})
        .then((response) => {
            return response.data;
        });
};


export default {
    register,
};
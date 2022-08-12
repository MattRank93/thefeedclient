import axios from "axios";

const API_URL = "https://help-spring-api.herokuapp.com/api/password/";

const forgot = (email) => {
    let body = {
        email: email
    }
    return axios.patch(
        API_URL + "forgot", body, { headers: {}})
        .then(res => {
            return(res.status)
        })
};

const verify = (email, token) => {
    let body = {
        email: email,
        token: token
    }
    return axios.patch(
        API_URL + "verify", body, { headers: {}})
        .then(res => {
            return(res.status)
        })
};

const reset = (email, token, password) => {
    let body = {
        email: email,
        token: token,
        password: password
    }
    return axios.patch(
        API_URL + "reset", body, { headers: {}})
        .then(res => {
            return(res.status)
        })
};

export default {
    forgot,
    verify,
    reset
};
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import NavigationBar from "../Components/NavigationBar";
import {Button, Grid, TextField} from "@mui/material";
import AuthService from "../services/auth.service";

const useStyles = makeStyles((theme) => ({}));

const Register = (props) => {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        roles: ["user"]
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(user => ({...user, [name]: value}));
    }


    /*
    enable this function affter login works
     */
    // if (isLoggedIn) {
    //     return <Redirect to="/profile"/>;
    // }

    const handleClick = (e) => {
        e.preventDefault();
        AuthService.register(inputs).then(
            (response) => {
                console.log(response)
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage)
            }
        );
    };

    return (
        <React.Fragment>

        <div>
            <NavigationBar></NavigationBar>
            <h1>REGISTER</h1>
            {/*<form onSubmit={handleSubmit}>*/}
            <Grid  item align="center">
            <form onSubmit={handleClick}>
                <hr />
                <label>Enter your information below and submit when you are ready:
                    <br/>
                    <TextField
                        id="username"
                        label="username"
                        type="text"
                        name="username"
                        autoFocus
                        required
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        id="email"
                        label="email"
                        type="text"
                        name="email"
                        required

                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        id="password"
                        label="password"
                        type="text"
                        name="password"
                        required

                        value={inputs.password || ""}
                        onChange={handleChange}
                    />

                    <br />
                    <TextField
                        id="firstname"
                        label="first name"
                        type="text"
                        name="firstname"
                        required

                        value={inputs.firstname || ""}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        id="lastname"
                        label="last name"
                        type="text"
                        name="lastname"
                        required

                        value={inputs.lastname || ""}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        id="phone"
                        label="phone"
                        type="text"
                        name="phone"

                        value={inputs.phone || ""}
                        onChange={handleChange}
                    />
                    <br />
                    <Button
                        color="primary"
                        type="submit"
                        variant="contained" >Register</Button>
                </label>

                {/*<inputs value={inputs} />*/}
            </form>
            </Grid>
        </div>
        </React.Fragment>

            )
}

export default Register;

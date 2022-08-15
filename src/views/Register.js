import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import NavigationBar from "../Components/NavigationBar";

const useStyles = makeStyles((theme) => ({}));

const Register = (props) => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.name.value);
    }





    return (

        <div>
            <NavigationBar></NavigationBar>
            <h1>REGISTER</h1>
            {/*<form onSubmit={handleSubmit}>*/}
            <form >
                <hr />
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <inputs value={inputs} />
            </form>
        </div>
    )
}

export default Register;

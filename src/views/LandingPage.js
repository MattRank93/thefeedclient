import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Navigation} from "@material-ui/icons";
import {Button} from "@mui/material";
import NavigationBar from "../Components/NavigationBar";

const useStyles = makeStyles((theme) => ({}));

const LandingPage = () => {
    // const classes = useStyles();
    const classes = useStyles();


    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>LANDING PAGE</h1>

        </div>
    )
}

export default LandingPage;


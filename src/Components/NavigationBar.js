import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Navigation} from "@material-ui/icons";
import {Button} from "@mui/material";

const useStyles = makeStyles((theme) => ({}));

const NavigationBar = () => {
    // const classes = useStyles();
    const classes = useStyles();


    return (
        <div>
            <div>
                <h1>
                <Button className={classes.button} href={'/'}>
                    Home
                </Button>
                </h1>
            </div>
            <div>
                <Button className={classes.button} href={'/register'}>
                    Register
                </Button>
            </div>
            <div>
                <Button className={classes.button} href={'/login'}>
                    Login
                </Button>
            </div>
            <div>
                <Button className={classes.button} href={'/profile'}>
                    Profile
                </Button>
            </div>
        </div>
    )
}

export default NavigationBar;


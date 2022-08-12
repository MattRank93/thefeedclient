import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth";
import {useSelector} from "react-redux";

// const AuthComponent = (props) => {
const PrivateRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={props => {
                return loggedIn ? (
                    <Comp {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {
                                prevLocation: path,
                                error: "You need to login first!",
                            },
                        }}
                    />
                );
            }}
        />
    );
};


export default PrivateRoute;
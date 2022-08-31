import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import NavigationBar from "../Components/NavigationBar";
import {Button, Grid, TextField} from "@mui/material";
import AuthService from "../services/auth.service";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({}));


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


const Login = () => {
    // const classes = useStyles();
    const classes = useStyles();
    const {isLoggedIn} = useSelector(state => state.auth);

    const [logins, setLogins] = useState({
        username: '',
        password: ''
    });



    const handleChange = (e) => {
        const {name, value} = e.target;
        setLogins(user => ({...user, [name]: value}));
    }

    const handleClick = (e) => {
        e.preventDefault();
        AuthService.login(logins).then(
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
        <div>
            <NavigationBar></NavigationBar>
            <h1>LOGIN</h1>
            <Grid  item align="center">
                <form onSubmit={handleClick}>
                    <hr />
                    <label>Enter your email and password when you are ready:
                        <br/>
                        <TextField
                            id="username"
                            label="username"
                            type="text"
                            name="username"
                            autoFocus
                            required
                            value={logins.username || ""}
                            onChange={handleChange}
                        />
                        <br />
                        <TextField
                            id="password"
                            label="password"
                            type="text"
                            name="password"
                            required

                            value={logins.password || ""}
                            onChange={handleChange}
                        />
                        <br />
                        <Button
                            color="primary"
                            type="submit"
                            variant="contained" >Login</Button>
                    </label>

                    {/*<inputs value={inputs} />*/}
                </form>
            </Grid>
        </div>
    )
}

export default Login;











// import React, {useState} from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import {Button, Card, CssBaseline, Grid, InputAdornment, TextField} from "@material-ui/core";
// import Container from "@material-ui/core/Container";
// import Navigation from "../components/home/Navigation";
// import logo from "../assets/HELPLOGO.png"
// import LockIcon from "@material-ui/icons/Lock";
// import EmailIcon from "@material-ui/icons/Email";
// import {useDispatch, useSelector} from "react-redux";
// import {login} from "../actions/auth";
// import {Redirect} from "react-router-dom";
//
// const useStyles = makeStyles((theme) => ({
//     media: {
//         objectFit: "cover",
//         textAlign: "center",
//         width: "100%",
//         display: "block",
//         padding: 0,
//     },
//     infoBoxSm: {
//         borderRadius: 15,
//         padding: 25,
//         boxShadow: "0px 0px 20px rgb(0, 0, 0, 0.2)",
//     },
//     div: {
//         flexGrow: 1,
//         position: 'absolute',
//         left: '50%',
//         width: 400,
//         top: '50%',
//         transform: 'translate(-50%, -50%)'
//     }
// }));
//
// const Login = (props) => {
//     const classes = useStyles();
//     const dispatch = useDispatch();
//     const {isLoggedIn} = useSelector(state => state.auth);
//
//     const [submit, setSubmit] = useState({
//         email: '',
//         password: '',
//     });
//
//     function handleChange(e) {
//         const {name, value} = e.target;
//         setSubmit(user => ({...user, [name]: value}));
//     }
//
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         console.log(submit)
//         dispatch(await login(submit))
//             .then(() => {
//                 this.props.history.push("/profile");
//             })
//             .catch(() => {
//                 console.log("Error")
//             });
//     };
//
//     if (isLoggedIn) {
//         return <Redirect to="/profile"/>;
//     }
//
//     return (
//         <React.Fragment>
//             <CssBaseline/>
//             <main>
//                 <Navigation login/>
//                 <div className={classes.div}>
//                     <Container>
//                         <Card className={classes.infoBoxSm}>
//                             <form onSubmit={handleLogin}>
//                                 <Grid container justify={'center'} direction={'column'}
//                                       spacing={2}>
//                                     <Grid item align="center">
//                                         <img src={logo} alt="Logo" height={40}/>
//                                     </Grid>
//                                     <Grid item align="center">
//                                         <TextField
//                                             fullWidth
//                                             id="email"
//                                             name="email"
//                                             type="text"
//                                             label="Email Address"
//                                             variant="outlined"
//                                             autoComplete="email"
//                                             autoFocus
//                                             required
//                                             value={submit.email}
//                                             onChange={handleChange}
//                                                    InputProps={{
//                                                        startAdornment: (
//                                                            <InputAdornment position="start">
//                                                                <EmailIcon/>
//                                                            </InputAdornment>
//                                                        ),
//                                                    }}/>
//                                     </Grid>
//                                     <Grid item align="center">
//                                         <TextField
//                                             fullWidth
//                                             id="password"
//                                             name="password"
//                                             type="password"
//                                             label="Password"
//                                             variant="outlined"
//                                             autoComplete="password"
//                                             autoFocus
//                                             required
//                                             value={submit.password}
//                                             onChange={handleChange}
//                                                    InputProps={{
//                                                        startAdornment: (
//                                                            <InputAdornment position="start">
//                                                                <LockIcon/>
//                                                            </InputAdornment>
//                                                        ),
//                                                    }}/>
//                                     </Grid>
//                                     <Grid item align="center">
//                                         <Button color="primary" fullWidth type="submit" variant="contained">
//                                             Sign In
//                                         </Button>
//                                     </Grid>
//                                 </Grid>
//                             </form>
//                         </Card>
//                     </Container>
//                 </div>
//             </main>
//         </React.Fragment>
//     )
// }
//
// export default Login;
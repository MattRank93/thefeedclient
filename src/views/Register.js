




import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import NavigationBar from "../Components/NavigationBar";

const useStyles = makeStyles((theme) => ({}));

const Register = (props) => {
    const classes = useStyles();


    return (

        <div>
            <NavigationBar></NavigationBar>
            <h1>REGISTER</h1>

        </div>
    )
}

export default Register;






// import React, {useState} from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import {Button, Card, CssBaseline, Grid, InputAdornment, TextField} from "@material-ui/core";
// import Container from "@material-ui/core/Container";
// import FaceIcon from '@material-ui/icons/Face';
// import GroupIcon from '@material-ui/icons/Group';
// import EmailIcon from '@material-ui/icons/Email';
// import LockIcon from '@material-ui/icons/Lock';
// import PhoneIcon from '@material-ui/icons/Phone';
// import BusinessIcon from '@material-ui/icons/Business';
// import logo from "../Assets/HELPLOGO.png"
// import {useDispatch} from "react-redux";
// import AuthService from "../services/auth.service";
// import NavigationBar from "../Components/NavigationBar";
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
// const Register = (props) => {
//     const classes = useStyles();
//     const dispatch = useDispatch();
//
//     const [submit, setSubmit] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         password: '',
//         phone: '',
//         company: ''
//     });
//
//     const handleChange = () => {
//
//     }
//
//     const handleRegister = (e) => {
//         AuthService.register(submit).then(
//             (response) => {
//                 console.log(response)
//             },
//             (error) => {
//                 const resMessage =
//                     (error.response &&
//                         error.response.data &&
//                         error.response.data.message) ||
//                     error.message ||
//                     error.toString();
//                 console.log(resMessage)
//             }
//         );
//     };
//
//     // todo: password validation
//     return (
//         <React.Fragment>
//             <CssBaseline/>
//             <main>
//                 <NavigationBar />
//                 <div className={classes.div}>
//                     <Container>
//                         <Card className={classes.infoBoxSm}>
//                             <form onSubmit={handleRegister}>
//                                 <Grid container justify={'center'} direction={'column'}
//                                       spacing={2}>
//                                     <Grid item align="center">
//                                         <img src={logo} alt="Logo" height={40}/>
//                                     </Grid>
//                                     <Grid item align="center">
//                                         <TextField
//                                             fullWidth
//                                             id="firstname"
//                                             name="firstname"
//                                             type="text"
//                                             label="First Name"
//                                             variant="outlined"
//                                             autoComplete="firstname"
//                                             autoFocus
//                                             required
//                                             value={submit.firstname}
//                                             onChange={handleChange}
//                                             InputProps={{
//                                                 startAdornment: (
//                                                     <InputAdornment position="start">
//                                                         <FaceIcon/>
//                                                     </InputAdornment>
//                                                 ),
//                                             }}/>
//                                     </Grid>
//                                     <Grid item align="center">
//                                         <TextField
//                                             fullWidth
//                                             id="lastname"
//                                             name="lastname"
//                                             type="text"
//                                             label="Last Name"
//                                             variant="outlined"
//                                             autoComplete="lastname"
//                                             autoFocus
//                                             required
//                                             value={submit.lastname}
//                                             onChange={handleChange}
//                                             InputProps={{
//                                                 startAdornment: (
//                                                     <InputAdornment position="start">
//                                                         <GroupIcon/>
//                                                     </InputAdornment>
//                                                 ),
//                                             }}/>
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
//                                             InputProps={{
//                                                 startAdornment: (
//                                                     <InputAdornment position="start">
//                                                         <EmailIcon/>
//                                                     </InputAdornment>
//                                                 ),
//                                             }}/>
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
//                                             InputProps={{
//                                                 startAdornment: (
//                                                     <InputAdornment position="start">
//                                                         <LockIcon/>
//                                                     </InputAdornment>
//                                                 ),
//                                             }}/>
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
//                                             InputProps={{
//                                                 startAdornment: (
//                                                     <InputAdornment position="start">
//                                                         <LockIcon/>
//                                                     </InputAdornment>
//                                                 ),
//                                             }}/>
//                                     </Grid>
//                                     <Grid item align="center">
//                                         <TextField
//                                             fullWidth
//                                             id="phone"
//                                             name="phone"
//                                             type="text"
//                                             label="Phone Number"
//                                             variant="outlined"
//                                             autoComplete="phone"
//                                             autoFocus
//                                             required
//                                             value={submit.phone}
//                                             onChange={handleChange}
//                                             InputProps={{
//                                                 startAdornment: (
//                                                     <InputAdornment position="start">
//                                                         <PhoneIcon/>
//                                                     </InputAdornment>
//                                                 ),
//                                             }}/>
//                                     </Grid>
//                                     <Grid item align="center">
//                                         <TextField
//                                             fullWidth
//                                             id="company"
//                                             name="company"
//                                             type="text"
//                                             label="Company"
//                                             variant="outlined"
//                                             autoComplete="company"
//                                             autoFocus
//                                             required
//                                             value={submit.company}
//                                             onChange={handleChange}
//                                             InputProps={{
//                                                 startAdornment: (
//                                                     <InputAdornment position="start">
//                                                         <BusinessIcon/>
//                                                     </InputAdornment>
//                                                 ),
//                                             }}/>
//                                     </Grid>
//                                     <Grid item align="center">
//                                         <Button color="primary" fullWidth type="submit" variant="contained">
//                                             Register
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
// export default Register;
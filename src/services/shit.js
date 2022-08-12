// import React from 'react';
// import Button from '@material-ui/core/Button';
// import FormGroup from '@material-ui/core/FormGroup';
// import Input from '@material-ui/core/Input';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import Grid from '@material-ui/core/Grid';
// import axios from 'axios';
// import './App.css';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import home from './home';
// import About from './About';
// import Contact from './Contact';
// import Form from "react-validation/build/form";
// import CheckButton from "react-validation/build/button";
//
// class App extends React.Component {
//
//     state = {
//         email: '',
//         pass: '',
//         suFirstname: '',
//         suLastname: '',
//         suEmail: '',
//         suPassword: ''
//     }
//
//     changeEmailField = event => {
//         this.setState({email: event.target.value});
//     }
//
//     changePassField = event => {
//         this.setState({pass: event.target.value});
//     }
//
//     changeStuffField = event => {
//         this.setState({stuff: event.target.value});
//     }
//
//     changeSuFirstnameField = event => {
//         this.setState({suFirstname: event.target.value});
//     }
//
//     changeSuLastnameField = event => {
//         this.setState({suLastname: event.target.value});
//     }
//
//     changeSuEmailField = event => {
//         this.setState({suEmail: event.target.value});
//     }
//
//     changeSuPasswordField = event => {
//         this.setState({suPassword: event.target.value});
//     }
//
//     signIn = event => {
//         event.preventDefault();
//
//         if (this.state.user === '' || !this.state.email.includes('@')) {
//             return alert("Missing Email or incorrect format");
//         }
//         if (this.state.pass === '') {
//             return alert("Missing Password");
//         }
//
//         const user = {
//             "email": this.state.email,
//             "password": this.state.pass
//         };
//
//         axios.post(`https://help-spring-api.herokuapp.com/api/users/login`, {"body": ""}, {headers: user})
//             .then(res => {
//                 alert(JSON.stringify(res));
//             })
//             .catch(err => {
//                 alert(err)
//             })
//
//     }
//
//     signUp = event => {
//         event.preventDefault();
//
//         const suUser = {
//             "firstname": this.state.suFirstname,
//             "lastname": this.state.suLastname,
//             "email": this.state.suEmail,
//             "password": this.state.suPassword
//         };
//
//         console.log(this.state.suEmail)
//
//         axios.post(`https://help-spring-api.herokuapp.com/api/users/registeruser`, {"body": ""}, {headers: suUser})
//             .then(res => {
//                 alert(JSON.stringify(res));
//             })
//             .catch(err => {
//                 alert(suUser.email + suUser.password + suUser.firstname + suUser.lastname)
//                 alert("Error: " + err)
//             })
//
//     }//
//
//     render() {
//         return (
//             <div className="login">
//
//                 <Grid
//                     container
//                     spacing={4}
//                     direction="row"
//                     alignItems="center"
//                     justify="center"
//                     style={{minHeight: '100vh'}}
//                 >
//
//                     <Grid item xs={6} sm={3}>
//                         <FormGroup>
//                             <FormLabel focused={true}>Sign Into Cool API</FormLabel>
//                             <FormControl margin={"normal"}>
//                                 <InputLabel htmlFor={"user"}>Email</InputLabel>
//                                 <Input
//                                     type={"text"}
//                                     id={"user"}
//                                     value={this.state.username}
//                                     onChange={this.onChangeUsername}
//                                     validations={[required]} >
//                                     Email
//                                 </Input>
//                             </FormControl>
//                             <FormControl margin={"normal"}>
//                                 <InputLabel htmlFor={"pass"}>Password</InputLabel>
//                                 <Input
//                                     id={"pass"}
//                                     value={this.state.password}
//                                     onChange={this.onChangePassword}
//                                     type={"password"}
//                                     validations={[required]} >
//                                     Password
//                             </Input>
//                             </FormControl>
//                             <div className="form-group">
//                                 <button
//                                     className="btn btn-primary btn-block"
//                                     disabled={this.state.loading}
//                                 >
//                                     {this.state.loading && (
//                                         <span className="spinner-border spinner-border-sm"></span>
//                                     )}
//                                     <span>Login</span>
//                                 </button>
//                             </div>
//
//                             {this.state.message && (
//                                 <div className="form-group">
//                                     <div className="alert alert-danger" role="alert">
//                                         {this.state.message}
//                                     </div>
//                                 </div>
//                             )}
//                             <CheckButton
//                                 style={{ display: "none" }}
//                                 ref={c => {
//                                     this.checkBtn = c;
//                                 }}
//                             />
//                         </FormGroup>
//                     </Grid>
//                 </Grid>
//             </div>
//         )
//     }
// }
//
// export default App;

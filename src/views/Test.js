

import React, {useState} from "react";
import ReactDOM from 'react-dom/client';
import NavigationBar from "../Components/NavigationBar";

function Test() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setTextarea(event.target.value)

        setMyCar(event.target.value)
    }
    return (

        <form>
            <NavigationBar/>

            <textarea value={textarea} onChange={handleChange} />
            <br />
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

export default Test;

// import React, {useState} from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import NavigationBar from "../Components/NavigationBar";
//
// const useStyles = makeStyles((theme) => ({}));
//
// const Register = (props) => {
//     const classes = useStyles();
//     const [name, setName] = useState("");
//     const [inputs, setInputs] = useState({});
//
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}))
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(inputs.name.value);
//     }
//
//
//
//
//
//     return (
//
//         <div>
//             <NavigationBar></NavigationBar>
//             <h1>REGISTER</h1>
//             {/*<form onSubmit={handleSubmit}>*/}
//             <form >
//                 <label>Enter your name:
//                     <input
//                         type="text"
//                         name="username"
//                         value={inputs.username || ""}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>Enter your age:
//                     <input
//                         type="number"
//                         name="age"
//                         value={inputs.age || ""}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <inputs value={inputs} />
//             </form>
//         </div>
//     )
// }
//
// export default Register;

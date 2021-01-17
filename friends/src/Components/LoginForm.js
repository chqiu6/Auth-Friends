import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const LoginForm = () => { 
    const history = useHistory();
    const [users, setUsers] = useState({
        username : "", 
        password : ""
    });

    const handleChanges = e => {
        setUsers({...users, [e.target.name] : e.target.value});
        console.log("form input values : ", e.target.value);
    };
    
    const formSubmit = e => { 
        e.preventDefault();
        axios
        .post("http://localhost:5000/api/login", users)
        .then(res =>{ 
            console.log("login axios post req :", res);
            localStorage.setItem("token", res.data.payload);
            history.push("/friend");
        })
        .catch(err =>{ 
            console.log("login post err : ", err);
        });
    };

    return (
        <form onSubmit = {formSubmit}>
            <label htmlFor = "username">Username </label>
            <input 
            type = "text"
            name = "username"
            value = {users.username}
            onChange = {handleChanges}
            />

            <label htmlFor = "password">Password </label>
            <input 
            type = "text"
            name = "password"
            value = {users.password}
            onChange = {handleChanges}
            />

            <button type = "submit">Log in</button>
        </form>
    )
}

export default LoginForm;
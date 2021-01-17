import React, {useState} from "react"
import axios from "axios";
import {axiosWithAuth} from "./axiosWithAuth";

const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({
        name : "",
        age : "",
        email : ""
    });

    const handleChanges = e => {
        setNewFriend({...newFriend, [e.target.name] : e.target.value});
        console.log("form input values : ", e.target.value);
    };
    
    const resetAddFriend = () => {
        setNewFriend(newFriend);
    }
    const formSubmit = e => { 
        e.preventDefault();
        axiosWithAuth()
        .post("http://localhost:5000/api/friends", newFriend)
        .then(res =>{ 
            console.log("addfriend axios post req :", res);
            resetAddFriend();
            
        })
        .catch(err =>{ 
            console.log("addfriend post err : ", err);
        });
    };

    return (
        <form onSubmit = {formSubmit}>
            <label htmlFor = "name">Name </label>
            <input 
            type = "text"
            name = "name"
            value = {newFriend.name}
            onChange = {handleChanges}
            />

            <label htmlFor = "age">Age </label>
            <input 
            type = "text"
            name = "age"
            value = {newFriend.age}
            onChange = {handleChanges}
            />

            <label htmlFor = "email">E-mail </label>
            <input 
            type = "text"
            name = "email"
            value = {newFriend.email}
            onChange = {handleChanges}
            />

            <button type = "submit">Add Friend</button>
        </form>
    )
}

export default AddFriend;
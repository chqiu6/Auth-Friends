import React, {useState} from "react";
import axios from "axios";
import {axiosWithAuth} from "./axiosWithAuth";
import AddFriend from "./AddFriend";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    const getFriends = () => { 
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            console.log("get friends friendslist axios get call : ", res);
            setFriends(res.data);
        })
        .catch(err =>{ 
            console.log("get friends friendslist axios get call :", err);
        });
    }
    return(
        <div className = "Friends-list">
            <button onClick = {() => getFriends()}>get our friends</button> 
            {
                friends.map(item => {
                    return (
                        <div className = "Friend-info" key = {item.id}>
                            <p> Name : {item.name}</p>
                            <p> Age : {item.age} </p>
                            <p> E-mail : {item.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FriendsList;
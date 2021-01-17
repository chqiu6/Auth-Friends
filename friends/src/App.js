import React from "react"
import LoginForm from "./Components/LoginForm";
import FriendsList from "./Components/FriendsList";
import AddFriend from "./Components/AddFriend";
import {Route} from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute"


function App() {
  return (
    <div className="App">
      <h1>testing</h1>
      <Route exact path = "/">
      <LoginForm/>
      </Route>
      <PrivateRoute path = "/friend" component = {FriendsList} />
      <PrivateRoute path = "/friend" component = {AddFriend} />
    </div>
  );
}

export default App;

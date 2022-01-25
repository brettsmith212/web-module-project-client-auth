import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/friends/add" component={AddFriends} />
          <Route path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import Logout from "./components/Logout";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid black;
  background-color: black;
  color: white;

  :hover {
    background-color: white;
    color: black;
  }
`;

function App() {
  return (
    <Router>
      <NavbarContainer>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/friends">Friends</StyledLink>
        <StyledLink to="/friends/add">Add Friends</StyledLink>
        <StyledLink to="/logout">Logout</StyledLink>
      </NavbarContainer>
      <div className="App">
        <Switch>
          <Route path="/friends/add" component={AddFriends} />
          <Route path="/logout" component={Logout} />
          <Route path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

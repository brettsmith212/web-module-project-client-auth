import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import Logout from "./components/Logout";
import styled from "styled-components";
import PrivateRoute from "./components/PrivateRoute";

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
  const token = localStorage.getItem("token");

  return (
    <Router>
      <NavbarContainer>
        {!token && <StyledLink to="/login">Login</StyledLink>}
        {token && <StyledLink to="/friends">Friends</StyledLink>}
        {token && <StyledLink to="/friends/add">Add Friends</StyledLink>}
        {token && <StyledLink to="/logout">Logout</StyledLink>}
      </NavbarContainer>
      <div className="App">
        <Switch>
          <PrivateRoute path="/friends/add" component={AddFriends} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

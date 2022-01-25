import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginContainer = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: bold;
  }

  input {
    width: 10rem;
    height: 2rem;
    background-color: black;
    color: white;
  }

  button {
    cursor: pointer;
    margin-top: 1rem;
    padding: 0.8rem;
    width: 10.5rem;
    background-color: black;
    color: white;
  }
  button:hover {
    background-color: white;
    color: black;
  }
`;

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const { push } = useHistory();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/login", value)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        push("/friends");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <LoginContainer>
      <h1>LOGIN</h1>
      <form onSubmit={submitLogin}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={value.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </LoginContainer>
  );
};

export default Login;

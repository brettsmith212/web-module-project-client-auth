import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriendContainer = styled.div`
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

function AddFriends() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <AddFriendContainer>
      <h1>ADD FRIEND</h1>
      <form onSubmit={submitLogin}>
        <label>
          Friend Name
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            name="age"
            value={value.age}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </AddFriendContainer>
  );
}

export default AddFriends;

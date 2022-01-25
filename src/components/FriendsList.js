import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const friendsArr = friends.map((friend) => (
    <h3 key={friend.id}>
      -{friend.name} - {friend.email}
    </h3>
  ));

  return (
    <div>
      <h1>FRIENDS LIST</h1>
      {friendsArr}
    </div>
  );
}

export default FriendsList;

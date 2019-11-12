import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import Friend from "./Friend";
import AddFriends from "./AddFriends";

const FriendList = () => {
  const [friendList, setFriendList] = useState([]);
  const [addFriend, setAddFriend] = useState({});

  useEffect(() => {
    AxiosWithAuth()
      .get("/api/friends")
      .then(response => setFriendList(response.data))
      .catch(error => console.log("Friend List: ", error));
  }, [setFriendList]);

  const handleAddFriend = e => {
    e.preventDefault();
    console.log(addFriend);

    AxiosWithAuth()
      .post("api/friends", addFriend)
      .then(response => {
        console.log(response);
      });
  };

  const handleChange = e => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value
    });

    // console.log(addFriend);
  };

  return (
    <div className="friend-list-container">
      <AddFriends
        handleChange={handleChange}
        handleAddFriend={handleAddFriend}
      />

      {friendList.map(friend => (
        <Friend
          key={friend.id}
          name={friend.name}
          age={friend.age}
          email={friend.email}
        />
      ))}
    </div>
  );
};

export default FriendList;

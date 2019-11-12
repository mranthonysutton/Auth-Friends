import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const FriendList = () => {
  const [friendList, setFriendList] = useState([]);

  AxiosWithAuth()
    .get("/api/friends")
    .then(response => console.log(response))
    .catch(error => console.log(error));

  return <div className="friend-list-container"></div>;
};

export default FriendList;

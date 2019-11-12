import React from "react";

const Friend = props => {
  return (
    <div className="friend-card">
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>{props.email}</p>
      <div className="button-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Friend;

import React from "react";

const AddFriends = props => {
  return (
    <div className="add-friends-container">
      <form onSubmit={props.handleAddFriend}>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          onChange={props.handleChange}
        />
        <input
          type="number"
          placeholder="Age..."
          name="age"
          onChange={props.handleChange}
        />
        <input
          type="email"
          placeholder="Email@email.com..."
          email={props.email}
          name="email"
          onChange={props.handleChange}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriends;

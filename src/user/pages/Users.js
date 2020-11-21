import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://images.unsplash.com/photo-1605705185718-5f667b08c4be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;

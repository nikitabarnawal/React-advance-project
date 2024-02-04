import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import Action from "./Action";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUserData(users);
    };
    getUserData();
  }, []);

  return (
    <div className="user-list">
      {userData.map((user) => (
        <div className="user">
          <UserProfile key={user.id} userData={user} />
          <Action />
        </div>
      ))}
    </div>
  );
};

export default UserList;

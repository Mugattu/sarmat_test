import React, { useState } from "react";
import UserProfileModal from "./UserProfileModal";
import "./UserList.scss";

function UserList({ users, onUserClick }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} onClick={() => handleUserClick(user)}>
          <img
            src={`https://i.pravatar.cc/80?img=${user.id}`}
            alt={user.name}
          />
          <p>{user.name}</p>
          <button className="show-profile-button">Показать профиль</button>
        </div>
      ))}
      <UserProfileModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}

export default UserList;

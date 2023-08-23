import React from "react";
import UserList from "../components/UserList";
import UserProfile from "../components/UserProfile";

function UsersPage({
  users,
  handleUserClick,
  isUserProfileOpen,
  selectedUser,
  handleCloseUserProfile,
}) {
  return (
    <>
      <h1>Список пользователей</h1>
      <UserList users={users} onUserClick={handleUserClick} />
      {isUserProfileOpen && (
        <UserProfile user={selectedUser} onClose={handleCloseUserProfile} />
      )}
    </>
  );
}

export default UsersPage;

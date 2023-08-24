import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import AddUserModal from "./components/AddUserModal";

import axios from "axios";
import UsersPage from "./pages/UserPage";
import Header from "./components/Header";
// import "./App.scss";

function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsUserProfileOpen(true);
  };

  const handleCloseUserProfile = () => {
    setIsUserProfileOpen(false);
    setSelectedUser(null);
  };

  const handleSaveUser = async (newUser) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );
      setUsers([...users, response.data]);
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleCancelAddUser = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <UsersPage
              users={users}
              handleUserClick={handleUserClick}
              isUserProfileOpen={isUserProfileOpen}
              selectedUser={selectedUser}
              handleCloseUserProfile={handleCloseUserProfile}
            />
          }
        />
        <Route
          path="/add-user"
          element={
            <AddUserModal
              onSave={handleSaveUser}
              onCancel={handleCancelAddUser}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import "./UserProfileModal.scss";

function UserProfileModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="user-profile-modal">
      <div className="modal-content">
        <div>
          <img
            src={`https://i.pravatar.cc/150?img=${user.id}`}
            alt={user.name}
          />
          <p>Имя: {user.name}</p>
          <p>Возраст: {user.age}</p>
          <p>Город: {user.city}</p>
          <h3>Контакты</h3>
          <ul>
            {user.contacts?.map((contact, index) => (
              <li key={index}>{contact}</li>
            ))}
          </ul>
        </div>
        <button className="close-button" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default UserProfileModal;
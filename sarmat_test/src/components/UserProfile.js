import React from "react";
import "./UserProfile.scss";

function UserProfile({ user, onClose }) {
  if (!user) return null;

  return (
    <div>
      <div>
        <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.name} />
        <p>Имя: {user.name}</p>
        <p>Возраст: {user.age}</p>
        <p>Город: {user.city}</p>
        <h3>Контакты</h3>
        <ul>
          {user?.contacts?.map((contact, index) => (
            <li key={index}>{contact}</li>
          ))}
        </ul>
      </div>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default UserProfile;

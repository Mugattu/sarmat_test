import React, { useState } from "react";
import "./AddUserModal.scss";

function AddUserModal({ onSave, onCancel }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [contacts, setContacts] = useState([""]);

  const handleAddContact = () => {
    setContacts([...contacts, ""]);
  };

  const handleContactChange = (index, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = value;
    setContacts(updatedContacts);
  };

  const handleSaveUser = () => {
    const newUser = {
      name,
      age,
      city,
      contacts,
    };
    onSave(newUser);
  };

  return (
    <div className="add-user-modal">
      <div className="modal-content">
        <h2>Добавить пользователя</h2>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Возраст:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Город:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <h3>Контакты</h3>
          {contacts.map((contact, index) => (
            <input
              key={index}
              type="text"
              value={contact}
              onChange={(e) => handleContactChange(index, e.target.value)}
            />
          ))}
          <button onClick={handleAddContact}>Добавить контакт</button>
        </div>
        <div className="button-container">
          <button className="save-button" onClick={handleSaveUser}>
            Сохранить
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Список пользователей</Link>
        </li>
        <li>
          <Link to="/add-user">Добавить пользователя</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

import { NavLink } from "react-router-dom";
import "./menu.css"

export default function Menu() {
  return (
    <div className="container">
      <header className="header">
        <nav className="menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `menu__item ${isActive ? "menu__item-active" : ""}`
            }
          >
            главная
          </NavLink>
          <NavLink
            to="/drift-taxi"
            className={({ isActive }) =>
              `menu__item ${isActive ? "menu__item-active" : ""}`
            }
          >
            дрифт-такси
          </NavLink>
          <NavLink
            to="/time-attack"
            className={({ isActive }) =>
              `menu__item ${isActive ? "menu__item-active" : ""}`
            }
          >
            time attack
          </NavLink>
          <NavLink
            to="/forza-karting"
            className={({ isActive }) =>
              `menu__item ${isActive ? "menu__item-active" : ""}`
            }
          >
            forza karting
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

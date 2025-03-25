import { NavLink } from "react-router-dom";

import "./logo.css"

const Logo = () => {
    return (
      <NavLink to="/">
        <div className="logo">Neto Auth v2</div>
      </NavLink>
    );
}

export default Logo;
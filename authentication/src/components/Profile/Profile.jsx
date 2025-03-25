import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import {AuthContext} from "@/contexts/AuthProvider";
import "./profile.css"
import Logo from "@/components/Logo/Logo";


const Profile = ({onLogout}) => {
    const { profile } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate("/")
    }

    const setActive = ({ isActive }) =>
      isActive ? "nav-link nav-link-active" : "nav-link";

    return (
      <div className="profile-box">
        <div className="profile-wrapper">
          <Logo />
          <div className="profile">
            <div className="profile-title">Hello, {profile.name}</div>
            <img
              className="profile-avatar-img"
              src={profile.avatar}
              alt="Avatar"
            />

            <form onSubmit={handleLogout}>
              <button type="submit" className="btn btn-outline-danger">
                Logout
              </button>
            </form>
          </div>
        </div>
        <nav className="toolbar-navbar">
          <NavLink to="/"  className={setActive}>Домой</NavLink>
          <NavLink to="/news" className={setActive}>Новости</NavLink>
          <NavLink to="/meteo" className={setActive}>Погода</NavLink>
          <NavLink to="/finances" className={setActive}>Финансы</NavLink>
        </nav>
      </div>
    );
}

Profile.propTypes = {
    onLogout: PropTypes.func.isRequired,
}

export default Profile;
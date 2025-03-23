import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const Profile = ({onLogout}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate("/")

    }

    return (
        <div className="profile">
            Привет, профиль!
            <form onSubmit={handleLogout}>
                <button type="submit">Logout</button>
            </form>
            <NavLink to="/">Домой</NavLink>
            <NavLink to="/news">Новости</NavLink>
        </div>
    )
}

Profile.propTypes = {
    onLogout: PropTypes.func.isRequired,
}

export default Profile;
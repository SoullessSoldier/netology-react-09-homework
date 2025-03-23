import { useContext, } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import LoginForm from "@/components/LoginForm/LoginForm";
import Profile from "@/components/Profile/Profile";

const Toolbar = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);

  return (
    <div className="container">
      <header>
        {isAuthenticated ? <Profile onLogout={logout} /> : <LoginForm />}
      </header>
    </div>
  );
};

export default Toolbar;

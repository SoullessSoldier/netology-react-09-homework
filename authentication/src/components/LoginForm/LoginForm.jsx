import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo/Logo";
import "./login_form.css"

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await login(username, password);
      if (result) navigate("/news");
    } catch (error) {
      setErrorMessage(error.message || "Не удалось войти.");
    }
  };


  return (
    <div className="login-form-wrapper">
      <Logo />
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <input
            type="text"
            className={"form-control"}
            id="username"
            value={username}
            placeholder="Имя пользователя"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className={"form-control"}
            id="password"
            value={password}
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <button type="submit" className="btn btn-outline-success">
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

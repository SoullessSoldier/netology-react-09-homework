import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Имя пользователя:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Пароль:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;

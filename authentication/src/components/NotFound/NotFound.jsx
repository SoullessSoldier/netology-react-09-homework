import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="p-3">
        <h1 className="notfound-title">Упс, что-то пошло не так...</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default NotFound;

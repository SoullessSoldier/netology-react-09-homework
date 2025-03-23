import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="notfound">I am Not Found</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;

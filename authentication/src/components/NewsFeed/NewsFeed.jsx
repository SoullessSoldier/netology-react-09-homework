import {Link} from "react-router-dom"

const NewsFeed = () => {
  return (
    <div className="container">
      <h1 className="news">I am News Feed</h1>
      <Link to="/news/1">Link 1</Link>
    </div>
  );
};

export default NewsFeed;
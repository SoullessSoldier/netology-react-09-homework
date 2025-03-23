import { useParams } from "react-router-dom";

const NewsItem = () => {
  const params = useParams();

  return (
    <div className="container">
      <h1 className="news-item">I am News Item # {params.id}</h1>
    </div>
  );
};

export default NewsItem;

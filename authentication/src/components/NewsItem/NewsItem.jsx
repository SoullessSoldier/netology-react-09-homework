import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthProvider";
import { fetchNews } from "@/utils/fetchData";
import "./news_item.css";

const NewsItem = () => {
  const [newsData, setNewsData] = useState(null);
  const { token } = useContext(AuthContext);
  const params = useParams();

  useEffect(() => {
    const getData = async (token) => {
      const data = await fetchNews(token, params.id);
      setNewsData(data);
    };
    getData(token);
  }, []);

  return (
    <div className="container">
      <div className="newsdata-wrapper p-3">
        <Link to="/news">Назад к ленте новостей</Link>
        {newsData && (
          <div className="newsdata">
            <h1 className="newsdata-title">{newsData.title}</h1>
            <img
              className="newsdata-image"
              src={newsData.image}
              alt="New's data image"
            />
            <p className="newsdata-content">{newsData.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsItem;

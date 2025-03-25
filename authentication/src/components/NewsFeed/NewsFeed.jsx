import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { fetchNews } from "@/utils/fetchData";
import NewsCard from "@/components/NewsCard/NewsCard";
import "./news.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const { token, logout } = useContext(AuthContext);

  useEffect(() => {
    const getData = async (token) => {
      try {
        const data = await fetchNews(token);
        setNews(data);
      } catch {
        logout();
      }
    };
    getData(token);
  }, []);

  return (
    <div className="news">
      {news && (
        <div className="news-list">
          {news.map((newsItem) => (
            <NewsCard data={newsItem} key={newsItem.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;

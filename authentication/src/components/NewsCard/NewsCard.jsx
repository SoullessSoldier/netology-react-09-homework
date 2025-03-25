import {PropTypes} from "prop-types";
import { Link } from "react-router-dom";
import "./news_card.css"

const NewsCard = ({data}) => {
    const truncateText = (text) => {
        if (text.length>150) return text.substring(0,150) + "...";
        return text;
    }
    return (
      <div className="card news-card">
        <img
          className="card-img-top news-card-img"
          src={data.image}
          alt="News image"
        />
        <div className="card-body news-card-body">
          <h5 className="card-title news-card-title">{data.title}</h5>
          <p className="card-text news-card-text">{truncateText(data.content)}</p>
          <Link to={`/news/${data.id}`} className="card-link">
            Подробнее
          </Link>
        </div>
      </div>
    );
}

NewsCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
    }).isRequired
}

export default NewsCard;
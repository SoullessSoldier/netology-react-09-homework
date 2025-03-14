import PropTypes from "prop-types";

import { calcDateDifference } from "@/utils/dateUtils";
import "./postcard.css";

const PostCard = ({ post }) => {
  return (
    <div className="postcard bordered-box">
      <div className="postcard-header">
        <h5 className="postcard-title">Сообщение #{post.id}</h5>
      </div>
      <div className="postcard-body">
        <p className="postcard-content">{post.content}</p>
        <span className="postcard-created">
          {calcDateDifference(post.created)}
        </span>
      </div>
      <div className="postcard-footer">
        <div className="postcard-footer-action-wrapper">
          <div className="postcard-footer-action">
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            Нравится
          </div>
          <div className="postcard-footer-action">
            <i class="fa fa-comment-o" aria-hidden="true"></i>
            Комментировать
          </div>
        </div>
        <form className="postcard-comment-form">
          <div className="form-control">
            <div className="postcard-input-wrapper">
              <input
                className="postcard-input"
                type="text"
                name="postcard-comment"
                placeholder="Напишите комментарий"
              />
              <div className="postcard-input-attachment-wrapper">
                <i class="fa fa-smile-o" aria-hidden="true"></i>
                <i class="fa fa-camera" aria-hidden="true"></i>
                <i class="fa fa-picture-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    created: PropTypes.number,
  }).isRequired,
};

export default PostCard;


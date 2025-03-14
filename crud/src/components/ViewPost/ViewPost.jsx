import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import { fetchPost } from "@/utils/api";
import { dateToLocaleString } from "@/utils/dateUtils";
import "./view_post.css"

export async function loader({ params }) {
  const post = await fetchPost(params.postId);
  if (!post?.post) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return post.post;
}

export default function ViewPost() {
  const post = useLoaderData();
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/");
  };

  const handleEdit = (event) => {
    event.preventDefault();
    navigate(`/posts/${post.id}/edit`);
  };

  const handleDelete = (event) => {
    if (!confirm("Вы действительно хотите удалить сообщение?")) {
      event.preventDefault();
    }
  };

  return (
    <div className="container">
      <div className="view-post bordered-box">
        {post ? (
          <div className="post">
            <div className="post-header">
              <h5 className="post-title">Сообщение #{post.id}</h5>
              <button
                type="button"
                className="button-close"
                onClick={handleCloseClick}
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <div className="post-body">
              <p className="post-content">{post.content}</p>
              <span className="post-created">
                {dateToLocaleString(post.created)}
              </span>
            </div>
            <div className="post-footer">
              <div className="post-control-wrapper">
                <Form action="edit" onSubmit={handleEdit}>
                  <button
                    type="submit"
                    className="post-button post-button-blue post-button-edit"
                  >
                    Изменить
                  </button>
                </Form>
                <Form method="post" action="delete" onSubmit={handleDelete}>
                  <button
                    type="submit"
                    className="post-button post-button-red post-button-delete"
                  >
                    Удалить
                  </button>
                </Form>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/">На главную</Link>
        )}
      </div>
    </div>
  );
}

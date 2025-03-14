import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PostCard from "@/components/PostCard/Postcard";
import { fetchPosts } from "@/utils/api";
import "./home.css";

export async function loader() {
  const posts = await fetchPosts();
  if (posts.length) {
    return posts.sort((a, b) => b.created - a.created);
  }
  return posts;
}

export function Home() {
  const posts = useLoaderData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/new`);
  };

  return (
    <div className="container">
      <div className="post-new bordered-box">
        <p><b>Лента сообщений</b></p>
        <button
          className="post-button post-button-blue"
          type="button"
          onClick={handleClick}
        >
          Создать пост
        </button>
      </div>
      <div className="post-list-wrapper">
        {posts.length > 0 && (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.id} className="post-list-item">
                <Link to={`posts/${post.id}`} className="post-link">
                  <PostCard post={post} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

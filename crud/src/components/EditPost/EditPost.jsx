import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { updatePost } from "@/utils/api";
import "./edit_post.css";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const payload = { id: params.postId, ...updates };
  await updatePost(params.postId, payload);
  return redirect(`/posts/${params.postId}`);
}

export default function EditPost() {
  const post = useLoaderData();
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="edit-post bordered-box">
        <div className="edit-post-header">
          <h5 className="post-title">Редактировать публикацию</h5>
          <button
            type="button"
            className="button-close"
            onClick={handleCloseClick}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="edit-post-body">
          <Form method="post">
            <div className="form-control">
              <textarea
                className="edit-post-text"
                name="content"
                id=""
                rows="5"
                defaultValue={post.content}
              ></textarea>
            </div>
            <div className="form-control button-wrapper">
              <button type="submit" className="post-button post-button-blue">
                Сохранить
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

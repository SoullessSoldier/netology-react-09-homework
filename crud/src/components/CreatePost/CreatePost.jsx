import { Form, redirect, useNavigate } from "react-router-dom";
import { createPost } from "@/utils/api";
import "./create_post.css";

export async function action({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  await createPost(payload);
  return redirect(`/`);
}

export default function CreatePost() {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="сreate-post bordered-box">
        <div className="сreate-post-header">
          <h5 className="post-title">Создать публикацию</h5>
          <button
            type="button"
            className="button-close"
            onClick={handleCloseClick}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="create-post-body">
          <Form method="post">
            <div className="form-control">
              <textarea
                className="create-post-text"
                name="content"
                id=""
                rows="5"
                maxLength={150}
              ></textarea>
            </div>
            <div className="form-control button-wrapper">
              <button type="submit" className="post-button post-button-blue">
                Опубликовать
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

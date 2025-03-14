import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import { Home, loader as postsLoader } from "@/components/Home/Home";
import ViewPost, { loader as postLoader } from "@/components/ViewPost/ViewPost";
import EditPost, { action as editAction } from "@/components/EditPost/EditPost";
import CreatePost, { action as createAction } from "@/components/CreatePost/CreatePost";
import { action as deleteAction } from "@/components/DeletePost/DeletePost";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} loader={postsLoader} />
      <Route path="posts/new" element={<CreatePost />} action={createAction} />
      <Route path="posts/:postId">
        <Route index element={<ViewPost />} loader={postLoader} />
        <Route
          path="edit"
          element={<EditPost />}
          action={editAction}
          loader={postLoader}
        />
        <Route path="delete" action={deleteAction} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

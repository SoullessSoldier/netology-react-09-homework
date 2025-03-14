import { redirect } from "react-router-dom";
import { deletePost } from "@/utils/api";

export async function action({ params }) {
  await deletePost(params.postId);
  return redirect("/");
}

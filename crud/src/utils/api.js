import backendUrls from "@/backend_urls";

const BASE_URL = backendUrls.posts;

export const fetchPosts = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const fetchPost = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};

export const updatePost = async (id, payload) => {
  const body = JSON.stringify(payload);
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body,
  });
  return response.status;
};

export const createPost = async (payload) => {
  const body = JSON.stringify(payload);
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    body,
  });
  return response.status;
};

export const deletePost = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
  return response.status;
};

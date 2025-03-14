const PORT = import.meta.env.VITE_BACKEND_PORT;

const backendUrls = {
  posts: `http://localhost:${PORT}/posts`,
};

export default backendUrls;

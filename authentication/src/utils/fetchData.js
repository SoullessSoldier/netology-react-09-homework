import backendUrls from "@/backend_urls";

const fetchProfile = async (token) => {
  const url = backendUrls.profile;
  const bearer = `Bearer ${token}`;
  const headers = { Authorization: bearer };
  const response = await fetch(url, { headers });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  if (response.status === 401) {
    throw new Error("Unauthorized")
  }
  return {};
};

const postAuth = async (payload) => {
  const url = backendUrls.auth;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const data = await response.json();
    return data.token || null;
  }
  return null;
};

const fetchNews = async (token, id=null) => {
  const url = id ? backendUrls.news + `/${id}` : backendUrls.news;
  const bearer = `Bearer ${token}`;
  const headers = { Authorization: bearer };
  const response = await fetch(url, { headers });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  if (response.status === 401) {
    throw new Error("Unauthorized");
  }
  return [];
};


export { fetchProfile, postAuth, fetchNews };

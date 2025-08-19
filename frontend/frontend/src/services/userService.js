import axios from "axios";

const API = "http://localhost:5000/api/users";

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

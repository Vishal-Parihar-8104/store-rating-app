import axios from "axios";

const API = "http://localhost:5000/api/stores";

export const getStores = async () => {
  const res = await axios.get(API);
  return res.data;
};

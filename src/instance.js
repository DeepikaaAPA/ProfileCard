import axios from "axios";

// define the base url
const baseURL = "https://randomuser.me/api/?page=1&results=1&seed=abc";

// define the axios instance
const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

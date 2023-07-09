import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://my-json-server.typicode.com",
  // baseURL: "http://localhost:3000",
});

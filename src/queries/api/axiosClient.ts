// axiosClient.ts
import axios from "axios";

const client = axios.create({
  baseURL: "http://axolotlstore.example.com/v1", // Replace with your actual API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;

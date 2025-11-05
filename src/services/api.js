import axios from "axios";

const api = axios.create({
  baseURL: "https://parkingapisenai.azurewebsites.net",
  headers:{
    "Content-Type":"application/json"
  }
});

export default api;
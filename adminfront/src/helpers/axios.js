import axios from "axios";
import { api } from "../urlConfig";

const axiosInstance = axios.create({
     // this is for the frontend to call backend api
     // We have this separate folder to centralize this api call to all the endpoints in the future
     baseURL: api,
     headers: {
          // 'Authorization': ''
          // token goes here
     }
});

export default axiosInstance;
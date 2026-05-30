import axios from "axios";

const courseApi = axios.create({
    baseURL: "http://localhost:8080/api/courses"
});

export default courseApi;
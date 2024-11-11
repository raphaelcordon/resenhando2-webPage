import axios from 'axios'


const BASE_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5065/api/v1"
        : "https://resenhando2-webapi-g7cjewefh8h9bta7.germanywestcentral-01.azurewebsites.net/";

const AxiosMotion = axios.create({
    baseURL: BASE_URL,
})

export default AxiosMotion
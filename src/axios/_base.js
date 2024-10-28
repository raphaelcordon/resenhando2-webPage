import axios from 'axios'


const BASE_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5065/api/v1"
        : "https://resenhando2-webapi-g7cjewefh8h9bta7.switzerlandnorth-01.azurewebsites.net/api/v1";

const AxiosMotion = axios.create({
    baseURL: BASE_URL,
})

export default AxiosMotion
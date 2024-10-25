import axios from 'axios'


const BASE_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5065/api/v1"
        : "https://white-stone-01f4ade03.5.azurestaticapps.net/api/v1";

const AxiosMotion = axios.create({
    baseURL: BASE_URL,
})

export default AxiosMotion
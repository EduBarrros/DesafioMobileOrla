import axios from "axios";

const TipApi = axios.create({
    baseURL: 'https://api.adviceslip.com',
    headers: {'Cache-Control': 'no-cache'}
});

export default TipApi;
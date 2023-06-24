import axios from 'axios';

var URL_BACKEND = "http://localhost:5000";

export async function sendRequest(url, method, body) {
    const options = {
        method: method,
        url: `${URL_BACKEND}${url}`,
        data: body || null
    };

    const response = await axios(options);

    return response;
}
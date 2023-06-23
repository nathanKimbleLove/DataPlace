import axios from 'axios';

var URL_BACKEND = "http://localhost:5000";

export async function sendRequest(url, method, body) {
    const options = {
        url: `${URL_BACKEND}${url}`,
        method: method,
        body: body || null
    };

    const response = await axios(options);

    return response;
}
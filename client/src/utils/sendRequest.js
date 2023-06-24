import axios from 'axios';

var URL_BACKEND = "http://localhost:5000";

export async function sendRequest(url, method, body) {
    const options = {
        method: method,
        url: `${URL_BACKEND}${url}`,
        data: body || null
    };

    let response = {data: null, error: null};
    try {
        let res = await axios(options);
        if (res.data) {
            response.data = res.data;
        }
        if (res.error) {
            response.error = res.error;
        }
    } catch (ex) {
        response.error = ex;
    }
    

    return response;
}
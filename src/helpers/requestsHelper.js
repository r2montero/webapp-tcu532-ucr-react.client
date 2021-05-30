import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const request = async (endpoint, data, method = 'GET', needToken = false) => {
    const url = BASE_URL + endpoint;

    const headers = (nt) => {
        if (nt) {
            return {
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('token')
            }
        }
        else {
            return {
                'Content-Type': 'application/json',
            }
        }
    }

    const config = {
        url,
        method,
        headers: headers(needToken),
        data: JSON.stringify(data),
        validateStatus: function (status) {
            return status < 404; // Resolve only if the status code is less than 501
        }
    }

    try {
        const { data } = await axios.request(config);
        return data;

    } catch (error) {
        console.error(error.response);
        return error.response;
    }
}
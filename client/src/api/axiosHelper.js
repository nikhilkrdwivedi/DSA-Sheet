import axios from 'axios';

const axiosHelper = async (url, method, formData = null, JSONData = null) => {
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    if (formData) {
        headers['Content-Type'] = 'multipart/form-data';
    }
    if (JSONData) {
        headers['Content-Type'] = 'application/json';
    }

    const response = await axios({
        method,
        url,
        data: formData || JSONData || null,
        headers,
    });
    return response;
};

export default axiosHelper;
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID GgZd-sVW_t5af35fbrTi2nEdDlSV1riVeTMuh69s7F4'
    }
});
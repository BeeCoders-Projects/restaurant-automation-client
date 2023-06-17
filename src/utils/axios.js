import axios from 'axios'
const API_IP = process.env.REACT_APP_API_IP;
const API_PORT = process.env.REACT_APP_API_PORT;

const instance = axios.create({
    baseURL: `http://${API_IP}:${API_PORT}/api/v1`
})
// console.log(API_IP, API_PORT)

instance.interceptors.request.use((config) => {
    if (window.localStorage.getItem('token')){
        config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
    }
    return config
})

instance.interceptors.response.use(response => {
    return response;
}, error => {
    // Handle response error
    if (error.response && error.response.status === 401) {
        if(window.localStorage.getItem("token")){
            window.localStorage.removeItem('token')
            window.location.href = '/auth';
        }
    }
    if (error.response && error.response.status === 404 && error.config.method === "get") {
        window.location.href = '/';
    }
    return Promise.reject(error);
});

export default instance

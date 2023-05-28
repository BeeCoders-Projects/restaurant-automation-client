import axios from 'axios'
const API_IP = process.env.REACT_APP_API_IP;
const API_PORT = process.env.REACT_APP_API_PORT;


const instance = axios.create({
    baseURL: `http://${API_IP}:${API_PORT}/api/v1`
})

instance.interceptors.request.use((config) => {
    if (window.localStorage.getItem('token')){
        config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
    }
    return config
})

export default instance

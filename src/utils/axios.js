import axios from 'axios'

const instance = axios.create({
    // baseURL: `http://${process.env.IP}:8081/api/v1`
    baseURL: `http://16.16.255.11:8081/api/v1`
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance

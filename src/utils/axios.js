import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://16.16.99.163:8081/api/v1'
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance

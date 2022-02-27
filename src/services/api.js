import axios from 'axios'

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const setAuthToken = token => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const deleteAuthToken = () => {
    delete api.defaults.headers.common['Authorization']
}

export default api
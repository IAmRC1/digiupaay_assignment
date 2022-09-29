import axios from 'axios'

const baseURL = 'http://localhost:5000/api/v1'

const getTeams = () => axios.get(`${baseURL}/teams`)
    .then(res => res.data.data)
    .catch(err => console.error(err))

const assignTask = (data) => axios.post(`${baseURL}/assign`, data)
    .then(res => res.data)
    .catch(err => console.error(err))

export {
    getTeams, assignTask
}
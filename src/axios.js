import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-backend-parth.herokuapp.com'
})

export default instance;
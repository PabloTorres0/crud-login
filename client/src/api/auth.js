import axios from './axios.js'


export const registerReques = user => axios.post (`/register`,user)

export const loginRequest = user => axios.post(`/login`,user)

export const verifyTokenReques = () => axios.get('/verify')
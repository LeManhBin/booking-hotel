import axios from 'axios'
import { BE_URL } from '../constants/config'

export const fetchAllDataUsers =  async () => {
    const res = await axios.get(`${BE_URL}users`);
    return res.data;
}

export const fetchInforMe = async (email) => {
    const res = await axios.get(`${BE_URL}users?email=${email}`);
    return res.data
}

export const fetchUserBytId = async (id) => {
    const res = await axios.get(`${BE_URL}users/${id}`);
    return res.data
}

export const fetchLoginUser = async (user) => {
    const res = await axios.post(`${BE_URL}login`, user);
    return res.data
}

export const fetchRegisterUser = async (user) => {
    const res = await axios.post(`${BE_URL}register`, user);
    return res.data
}

export const fetchUpdateUser = async (id,user) => {
    const res = await axios.put(`${BE_URL}users/${id}`, user)
    return res.data
}

export const fetchDeleteUser = async (id) => {
    const res = await axios.delete(`${BE_URL}users/${id}`)
    return res.data
}
import axios from 'axios'
import { BE_URL } from '../constants/config'

export const fetchAllDataEmployee =  async () => {
    const res = await axios.get(`${BE_URL}employee`);
    return  res.data;
}

export const fetchCreateEmployee = async (room) => {
    const res = await axios.post(`${BE_URL}employee`, room);
    return res.data
}

export const deleteEmployeeById = async (id) => {
    return await axios.delete(`${BE_URL}employee/${id}`); 
}


export const fetchDataEmployeeById = async (id) => {
    const res = await axios.get(`${BE_URL}employee/${id}`);
    return res.data
}

export const fetchUpdateEmployeeById = async (id, payload) => {
    const res = await axios.put(`${BE_URL}employee/${id}`, payload)
    return res.data
}
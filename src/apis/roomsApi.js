import axios from 'axios'
import { BE_URL } from '../constants/config'

export const fetchAllDataRoom =  async () => {
    const res = await axios.get(`${BE_URL}rooms`);
    return  res.data;
}

export const fetchDataRoomById = async (id) => {
    const res = await axios.get(`${BE_URL}rooms/${id}`);
    return res.data
}

export const fetchCreateRoom = async (room) => {
    const res = await axios.post(`${BE_URL}rooms`, room);
    return res.data
}

export const deleteRoomById = async (id) => {
    return await axios.delete(`${BE_URL}rooms/${id}`); 
}

export const fetchUpdateRoomById = async (id, payload) => {
    const res = await axios.put(`${BE_URL}rooms/${id}`, payload)
    return res.data
}

export const fetchSearchRoomBySize = async (size) => {
    const res = await axios.get(`${BE_URL}rooms?size=${size}`)
    return res.data
}
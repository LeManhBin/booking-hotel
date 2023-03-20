import axios from 'axios'
import { BE_URL } from '../constants/config'

export const fetchAllBanner = async () => {
    const res = await axios.get(`${BE_URL}banner`);
    return res.data
}

export const fetchUpdateBanner = async (id, payload) => {
    const res = await axios.put(`${BE_URL}banner/${id}`,payload);
    return res.data
}

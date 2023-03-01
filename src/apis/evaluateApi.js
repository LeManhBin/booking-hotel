import axios from 'axios'
import { BE_URL } from '../constants/config'

export const fetchDataEvaluateByIdRoom =  async (idRoom) => {
    const res = await axios.get(`${BE_URL}evaluate?idRoom=${idRoom}`);
    return  res.data;
}

export const fetchAllEvaluate =  async () => {
    const res = await axios.get(`${BE_URL}evaluate`);
    return  res.data;
}

export const fetchCreateEvaluate = async (comment) => {
    const res = await axios.post(`${BE_URL}evaluate`,comment);
    return res.data;
}



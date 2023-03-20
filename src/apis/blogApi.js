import axios from 'axios'
import { BE_URL } from '../constants/config'

export const fetchAllDataBlog =  async () => {
    const res = await axios.get(`${BE_URL}blogs`);
    return  res.data;
}

export const fetchDataBlogById =  async (id) => {
    const res = await axios.get(`${BE_URL}blogs/${id}`);
    return  res.data;
}

export const fetchCreateBlog =  async (blog) => {
    const res = await axios.post(`${BE_URL}blogs`, blog);
    return  res.data;
}

export const fetchDeleteBlog = async (id) => {
    const res = await axios.delete(`${BE_URL}blogs/${id}`);
    return res.data
}

export const fetchUpdateBlog = async (id, payload) => {
    const res = await axios.put(`${BE_URL}blogs/${id}`,payload);
    return res.data
}

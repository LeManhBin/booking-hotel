import axios from 'axios'
import { BE_URL } from '../constants/config'

export const fetchAllDataBookings =  async () => {
    const res = await axios.get(`${BE_URL}bookings`);
    return  res.data;
}

export const fetchDeleteBooking = async (id) => {
    const res = await axios.delete(`${BE_URL}bookings/${id}`);
    return res.data;
}

export const fetchBookingById = async (id) => {
    const res = await axios.get(`${BE_URL}bookings/${id}`)
    return res.data;
}

export const fetchUpdateBookingById = async (id, payload) => {
    const res = await axios.put(`${BE_URL}bookings/${id}`, payload)
    return res.data;
}

export const fetchCreateBooking = async (booking) => {
    const res = await axios.post(`${BE_URL}bookings`, booking)
    return res.data;
}
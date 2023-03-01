import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchAllDataBookings, fetchBookingById, fetchCreateBooking, fetchDeleteBooking } from "../../../apis/bookingApi";

const initialState = {
    allBookings: [],
    booking: {},
    isLoading: false,
    isLoadingCreate: false,
    errors: {},
}

export const actFetchAllBookings = createAsyncThunk('bookings/actFetchAllBookings', async () => {
    const data = await fetchAllDataBookings()
    return data || []
})
export const actFetchBookingById = createAsyncThunk('booking/actFetchBookingById', async (id) => {
    const booking = await fetchBookingById(id)
    return booking || {}
})
export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state, action) => {
            state.isLoadingCreate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actFetchAllBookings.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(actFetchAllBookings.rejected, (state) => {
            state.errors = {
                errors: "Error!"
            };
            state.isLoading = false
        });

        builder.addCase(actFetchAllBookings.fulfilled, (state, action) => {
            state.isLoading = false
            state.allBookings = action.payload || []
        });

        builder.addCase(actFetchBookingById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.booking = action.payload || {}
        })
    }
})

export const actCreateBooking = (booking) => async (dispatch) => {
    try {
        await fetchCreateBooking(booking)
        dispatch(actFetchAllBookings())
        toast.success('Booking Success!')
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}

export const actDeleteBooking = (id) => async (dispatch) => {
    try {
        await fetchDeleteBooking(id)
        dispatch(actFetchAllBookings())
        toast.success('Delete Success!')
    } catch (error) {
        console.log(error);
        toast.warning(error)
    }finally{
        dispatch(actUpdateLoadingCreate(false))
    }
}

export const {actUpdateLoadingCreate} = bookingsSlice.actions
export default bookingsSlice.reducer
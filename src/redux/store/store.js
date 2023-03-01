import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/usersSlice/usersSlice';
import roomsReducer from "../features/roomsSlice/roomsSlice";
import employeeReducer from "../features/employeeSlice/employeeSlice";
import bookingsReducer from "../features/bookingsSlice/bookingsSlice";
export const store = configureStore({
    reducer: {
        users: usersReducer,
        rooms: roomsReducer,    
        employee: employeeReducer,
        bookings: bookingsReducer,
    },
});

export default store
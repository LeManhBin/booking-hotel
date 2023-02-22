import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/usersSlice/usersSlice';
import roomsReducer from "../features/roomsSlice/roomsSlice";
import employeeReducer from "../features/employeeSlice/employeeSlice"
export const store = configureStore({
    reducer: {
        users: usersReducer,
        rooms: roomsReducer,    
        employee: employeeReducer,
    },
});

export default store
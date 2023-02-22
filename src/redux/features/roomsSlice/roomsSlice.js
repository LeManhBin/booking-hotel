import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteRoomById, fetchAllDataRoom, fetchCreateRoom, fetchDataRoomById } from "../../../apis/roomsApi";




const initialState = {
    allRooms: [],
    room: {},
    isLoading: false,
    isLoadingCreate: false,
    errors: {},
}
    

export const actFetchAllRoom = createAsyncThunk('rooms/actFetchAllRoom', async () => {
    const data = await fetchAllDataRoom()
    console.log(data);
    return data || []
})

export const actFetchRoomById = createAsyncThunk(`rooms/actFetchRoomById`, async (id) => {
    const room = await fetchDataRoomById(id)
    return room
})

export const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state, action) => {
            state.isLoadingCreate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actFetchAllRoom.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(actFetchAllRoom.rejected, (state) => {
            state.errors = {
                errors: "ERROR 404!"
            };
            state.isLoading = false;
        });
        builder.addCase(actFetchAllRoom.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allRooms = action.payload || [];
        });

        builder.addCase(actFetchRoomById.fulfilled,  (state, action) => {
            state.isLoading = false;
            state.room = action.payload || {};
        })
    },
});

export const actCreateRoom = (room) => async (dispatch) => {
    console.log(room, "room");
    try {
        dispatch(actUpdateLoadingCreate(true));
        await fetchCreateRoom(room);
        dispatch(actFetchAllRoom())

        
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(actUpdateLoadingCreate(false));
    }
}

export const actDeleteRoom = (id) => async (dispatch) => {
    try {
        await deleteRoomById(id)
        dispatch(actFetchAllRoom())
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}




export const {actUpdateLoadingCreate} = roomsSlice.actions
export default roomsSlice.reducer
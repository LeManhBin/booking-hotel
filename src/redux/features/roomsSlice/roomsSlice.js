import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchAllEvaluate, fetchCreateEvaluate, fetchDataEvaluateByIdRoom } from "../../../apis/evaluateApi";
import { deleteRoomById, fetchAllDataRoom, fetchCreateRoom, fetchDataRoomById, fetchSearchRoomBySize, fetchUpdateRoomById } from "../../../apis/roomsApi";




const initialState = {
    allRooms: [],
    roomSearch: [],
    evaluate: [],
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

export const actFetchSearch = createAsyncThunk('rooms/actFetchSearch', async (size) => {
    const room = await fetchSearchRoomBySize(size)
    return room
})

export const actFetchEvaluateByIdRoom = createAsyncThunk('room/actFetchEvaluateByIdRoom', async (idRoom) => {
    const evaluate = await fetchDataEvaluateByIdRoom(idRoom)
    return evaluate
})

export const actFetchAllEvaluate = createAsyncThunk('evaluate/actFetchAllEvaluate', async () => {
    const data = await fetchAllEvaluate();
    return data || []
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

        builder.addCase(actFetchSearch.fulfilled,  (state, action) => {
            state.isLoading = false;
            state.roomSearch = action.payload || []
        })

        builder.addCase(actFetchEvaluateByIdRoom.fulfilled, (state, action) => {
            state.isLoading = false;
            state.evaluate = action.payload || []
        })
        builder.addCase(actFetchAllEvaluate.fulfilled, (state, action) => {
            state.isLoading = false;
            state.evaluate = action.payload || [];
        });
    },
});

export const actCreateRoom = (room) => async (dispatch) => {
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
export const actUpdateRoom = (id, room) => async (dispatch) => {
    try {
        dispatch(actUpdateLoadingCreate(true));
        await fetchUpdateRoomById(id, room);
        await dispatch(actFetchAllRoom());
        toast.success('Update Success')
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}

export const actCreateEvaluate = (comment) => async (dispatch) => {
    try {
        dispatch(actUpdateLoadingCreate(true));
        await fetchCreateEvaluate(comment);
        dispatch(actFetchEvaluateByIdRoom(comment.idRoom))
    } catch (error) {
        console.log(false);
    } finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}


export const {actUpdateLoadingCreate} = roomsSlice.actions
export default roomsSlice.reducer
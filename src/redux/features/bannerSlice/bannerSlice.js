import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchAllBanner, fetchUpdateBanner } from "../../../apis/bannerApi";

const initialState = {
    allBanner: [],
    banner: {},
    isLoading: false,
    isLoadingCreate: false,
    errors: {},
}

export const actFetchAllBanner = createAsyncThunk('banner/actFetchAllBanner', async () => {
    const data = await fetchAllBanner()
    return data || {}
})
export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state, action) => {
            state.isLoadingCreate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actFetchAllBanner.fulfilled, (state, action) => {
            state.isLoading = false
            state.banner = action.payload || {}
        });

    }

});


export const actUpdateBanner = (id, payload) => async (dispatch) => {
    try {
        await fetchUpdateBanner(id, payload)
        toast.success('Update Success')
    } catch (error) {
        
    }finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}
export const {actUpdateLoadingCreate} = bannerSlice.actions
export default bannerSlice.reducer
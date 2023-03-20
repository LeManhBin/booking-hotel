import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchAllDataBlog, fetchCreateBlog, fetchDataBlogById, fetchDeleteBlog, fetchUpdateBlog } from "../../../apis/blogApi";

const initialState = {
    allBlog: [],
    blog: {},
    isLoading: false,
    isLoadingCreate: false,
    errors: {},
}

export const actFetchAllBlog = createAsyncThunk('blogs/actFetchAllBlog', async () => {
    const data = await fetchAllDataBlog()
    return data || []
})

export const actFetchBlogById = createAsyncThunk('blogs/actFetchBlogById', async (id) => {
    const data = await fetchDataBlogById(id)
    return data || []
})
export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state, action) => {
            state.isLoadingCreate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actFetchAllBlog.fulfilled, (state, action) => {
            state.isLoading = false
            state.allBlog = action.payload || []
        });

        builder.addCase(actFetchBlogById.fulfilled, (state, action) => {
            state.isLoading = false
            state.blog = action.payload || {}
        })
    }

});

export const actCreateBlog = (blog) => async (dispatch) =>{
    try {
        dispatch(actUpdateLoadingCreate(true))
        await fetchCreateBlog(blog);
        dispatch(actFetchAllBlog())
        toast.success('Add new blog success')
    } catch (error) {
        console.log(error);
    }finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}

export const actDeleteBlog = (id) => async (dispatch) => {
    try {
        await fetchDeleteBlog(id)
        dispatch(actFetchAllBlog())
        toast.success('Delete Success')
    } catch (error) {
        console.log(error);
    }finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}

export const actUpdateBlog = (id, payload) => async (dispatch) => {
    try {
        await fetchUpdateBlog(id, payload)
        dispatch(actFetchAllBlog())
        toast.success('Update Success')
    } catch (error) {
        
    }finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}
export const {actUpdateLoadingCreate} = blogSlice.actions
export default blogSlice.reducer
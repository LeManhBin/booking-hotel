import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { toast } from "react-toastify";
import { fetchAllDataUsers, fetchLoginUser, fetchRegisterUser, fetchUpdateUser } from "../../../apis/usersApi";
import { BE_URL, KEY_ACCESS_TOKEN } from "../../../constants/config";
// import * as jwt from 'jsonwebtoken'
const initialState = {
    users: [],
    user: {},
    accessToken: "",
    isLoading: false,
    isLogged: false,
    error: []
}


export const actFetchAllUsers = createAsyncThunk('users/actFetchAllUsers', async () => {
    const data = await fetchAllDataUsers()
    return data || []
})

export const actFetchLogin = createAsyncThunk('users/actFetchLogin', async (user) => {
    const userData = await fetchLoginUser(user)
    return userData
})

export const actFetchRegister = createAsyncThunk('users/actFetchRegister', async (user) => {
    const userData = await fetchRegisterUser(user)
    return userData
})

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state, action) => {
            state.isLoadingCreate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actFetchAllUsers.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(actFetchAllUsers.rejected, (state) => {
            state.error = {
                error: "Error"
            };
            state.isLoading = false;
        });

        builder.addCase(actFetchAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload || [];
        })
        // login

        builder.addCase(actFetchLogin.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(actFetchLogin.rejected, (state) => {
            state.error = {
                error: "Error"
            };
            state.isLoading = false;
        });

        builder.addCase(actFetchLogin.fulfilled, (state, action) => {
            const {user, accessToken } = action.payload;
            console.log(user, 'user');
            if(accessToken) {
                state.user = user
                state.user = user;
                state.accessToken = accessToken;
                state.isLogged = true
                localStorage.setItem(KEY_ACCESS_TOKEN, accessToken)
            }
            state.isLoading = false
            console.log('login',  action.payload);
        })
    }
});
    export const actReLogin = (accessToken) => (dispatch) => {
        try {
            console.log('accessToken in redux',accessToken);
            // const decodeToken = jwt.decode(accessToken)
            // console.log(decodeToken);
        } catch (error) {
            console.log(error);
        }finally {
            dispatch(actUpdateLoadingCreate(false));
        }
    }

    export const actRegister = (user) => async (dispatch) => {
        try {
            dispatch(actUpdateLoadingCreate(true));
            await fetchRegisterUser(user);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actUpdateLoadingCreate(false));
        }
    }

    export const actUpdateUser = (id, user) => async (dispatch) => {
        try {
            dispatch(actUpdateLoadingCreate(true));
            await fetchUpdateUser(id, user);
            await dispatch(actFetchAllUsers());
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actUpdateLoadingCreate(false))
        }
    }

export const {actUpdateLoadingCreate} = usersSlice.actions
export default usersSlice.reducer
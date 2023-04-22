import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { toast } from "react-toastify";
import { fetchAllDataUsers, fetchDeleteUser, fetchInforMe, fetchLoginUser, fetchRegisterUser, fetchUpdateUser, fetchUserBytId } from "../../../apis/usersApi";
import { BE_URL, KEY_ACCESS_TOKEN, KEY_IS_LOGGER } from "../../../constants/config";
import * as Jwt from "jsonwebtoken";
const initialState = {
    users: [],
    user: {},
    accessToken: localStorage.getItem(KEY_ACCESS_TOKEN) || "",
    isLoading: false,
    isLogged: JSON.parse(localStorage.getItem(KEY_IS_LOGGER)) || false,
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

export const actFetchUserByID = createAsyncThunk('users/actFetchUserByID', async (id) => {
    const user = await fetchUserBytId(id)
    return user
})

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state, action) => {
            state.isLoadingCreate = action.payload;
        },
        actGetMe: (state, action) => {
            state.user = action.payload
        },
        loginSuccess: (state, action) => {
            localStorage.setItem(KEY_IS_LOGGER, JSON.stringify(true))
            state.isLogged = true
        },
        actLogout: (state, action) => {
            localStorage.removeItem(KEY_ACCESS_TOKEN);
            localStorage.setItem(KEY_IS_LOGGER, JSON.stringify(false))
            state.isLogged = false;
            state.user = {};
            state.accessToken = "";
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
            toast.error('Thất bại!!')
        });

        builder.addCase(actFetchLogin.fulfilled, (state, action) => {
            const {user, accessToken } = action.payload;
      
            if(accessToken) {
                state.user = user
                state.accessToken = accessToken;
                localStorage.setItem(KEY_IS_LOGGER, JSON.parse(true))
                state.isLogged = true
                localStorage.setItem(KEY_ACCESS_TOKEN, accessToken) 
            }
            state.isLoading = false
            toast.success('Loggin thành công')
        })
        //register
        builder.addCase(actFetchRegister.rejected, (state) => {
            state.error = {
                error: "error"
            };
            state.isLoading = false;
            toast.error('Đăng ký thất bại')
        })

        //
        builder.addCase(actFetchUserByID.fulfilled,  (state, action) => {
            state.isLoading = false;
            state.user = action.payload || {}
        })
    }
});
    export const actReLogin = (accessToken) => async (dispatch) => {
        try {
            const decodeToken = Jwt.decode(accessToken)
            if(decodeToken?.email) {
                const repsInfo = await fetchInforMe(decodeToken.email)
                const infoUser = repsInfo?.[0];
                // delete infoUser?.password
                dispatch(actGetMe(infoUser))
                dispatch(loginSuccess())
            }
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
            toast.success('đăng ký thành công')
        } catch (error) {
            console.log(error);
            toast.error('Đăng ký Thất bại')
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

    export const actDeleteUser = (id) => async (dispatch) => {
        try {
            dispatch(actUpdateLoadingCreate(true));
            await fetchDeleteUser(id)
            dispatch(actFetchAllUsers())
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actUpdateLoadingCreate(false))
        }
    }
export const {actUpdateLoadingCreate, actGetMe, loginSuccess, actLogout} = usersSlice.actions
export default usersSlice.reducer
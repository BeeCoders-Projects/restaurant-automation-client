import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'
import jwtDecode from "jwt-decode";

const initialState = {
    name: null,
    sub: null,
    token: "token",
    isLoading: false,
    status: null,
}

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ username, password }) => {
        try {
            const {headers, data} = await axios.post('/auth/login', {
                username,
                password,
            })
            if (headers['authorization']) {
                const token = headers['authorization']
                window.localStorage.setItem('token', token);
                const decodedToken = jwtDecode(token);

                return {decodedToken, token}
            }
            return data
        } catch (error) {
            return error.response.data
        }
    },
)

export const getMe = createAsyncThunk(
    'auth/loginUser',
    async () =>{
        try{
            const token = window.localStorage.getItem('token')
            const decodedToken = jwtDecode(token);
            return {decodedToken, token}
        } catch (error){
            window.localStorage.removeItem('token')
        }
    }
)

export const changeTableStatus = createAsyncThunk(
    'auth/changeStatus',
    async ({table_name, status}) => {
        try{
            await axios.patch('/tables/status', {
                table_name,
                status
            })
        } catch (error) {
            console.log(error)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.sub = null
            state.token = null
            state.isLoading = false
            state.status = null
        },
    },
    extraReducers: {
        // Login user
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.name = action.payload.decodedToken?.name
            state.sub = action.payload.decodedToken?.sub
            state.token = action.payload?.token
            state.status = action.payload?.message
        },
        [loginUser.rejected]: (state, action) => {
            state.status = action.payload?.message
            state.isLoading = false
        },
        // GET me
        [getMe.pending]: (state) => {
            state.isLoading = true
        },
        [getMe.fulfilled]: (state, action) => {
            state.name = action.payload?.decodedToken?.name
            state.sub = action.payload?.decodedToken?.sub
            state.token = action.payload?.token
            state.isLoading = false
        },
        [getMe.rejected]: (state) => {
            state.isLoading = false
        }
    },
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer

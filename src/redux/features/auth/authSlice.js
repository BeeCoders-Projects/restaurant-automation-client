import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'
import jwtDecode from "jwt-decode";

const initialState = {
    user: null,
    token: null,
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
            console.log(headers, data);
            if (headers['authorization']) {
                const token = headers['authorization']
                window.localStorage.setItem('token', token);
                const decodedToken = jwtDecode(token);

                return {decodedToken, token}
            }
            return data
        } catch (error) {
            console.log(error)
            return error.response.data
        }
    },
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
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
            state.user = action.payload?.decodedToken?.sub
            state.token = action.payload?.token
            state.status = action.payload?.message
        },
        [loginUser.rejected]: (state, action) => {
            state.status = action.payload?.message
            state.isLoading = false
        },
    },
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer

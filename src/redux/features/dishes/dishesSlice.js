import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from '../../../utils/axios'

const initialState = {
    dishes: null,
    category: null
}

export const getMenuDishes = createAsyncThunk(
    '',
    async () => {
        try{
            const { data } = await axios.get(`/dishes`)
            return data
        } catch (error){
            console.log(error);
        }
    }
);

export const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {},
    extraReducers: {
        // Получение списка блюд
        [getMenuDishes.pending]: (state) => {
            state.loading = true
        },
        [getMenuDishes.fulfilled]: (state, action) => {
            state.loading = false
            state.dishes = action.payload
        },
        [getMenuDishes.rejected]: (state) => {
            state.loading = false
        },
    }});

export default dishSlice.reducer;
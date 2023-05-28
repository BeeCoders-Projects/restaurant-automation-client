import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
    name: null,
    description: null,
    price: null,
    weight: null,
    icon: null,
    ingredients: null,
    category: null,
    specifics: null,
    isLoading: false,
    status: null,
}

export const getDish = createAsyncThunk(
    'dish/get',
    async ({dishId}) => {
        try{
            const { data } = await axios.get(`/dishes/${dishId}`)
            return data
        } catch (error){
            console.log(error);
        }
    });

export const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {},
    extraReducers: {
        // Получение списка блюд
        [getDish.pending]: (state) => {
            state.isLoading = true
        },
        [getDish.fulfilled]: (state, action) => {
            state.isLoading = false
            state.name = action.payload.name
            state.description = action.payload.description
            state.price = action.payload.price
            state.weight = action.payload.weight
            state.icon = action.payload.icon
            state.ingredients = action.payload.ingredients
            state.category = action.payload.category
            state.specifics = action.payload.specifics
        },
        [getDish.rejected]: (state) => {
            state.isLoading = false
        },
    }});

export default dishSlice.reducer;
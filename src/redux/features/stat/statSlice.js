import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
    promo: []
}


export const  getPromoStat= createAsyncThunk(
    'stat/promo',
    async({from, to}, {rejectWithValue}) => {
        try {
            const {data} = await axios.get('/orders/promocode/statistic', {params: {from, to}})
            return data
        } catch (error){
            return rejectWithValue()
        }
    }
);

export const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers: {},
    extraReducers: {
        [getPromoStat.fulfilled]: (state, action) => {
            state.promo = action.payload
        }
    }
})

export default statSlice.reducer
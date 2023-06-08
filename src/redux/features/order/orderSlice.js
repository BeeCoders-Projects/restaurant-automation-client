import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {clearCart} from "../cart/cartSlice";

const initialState = {
    isLoading: false,
    orderId: null,
    message: null
}

export const createOrder = createAsyncThunk (
    'order/create',
    async (_,
           {rejectWithValue, dispatch}
    ) => {
        try {
            const cartItems =
                localStorage.getItem("cartItems") !== null
                    ? JSON.parse(localStorage.getItem("cartItems"))
                    : [];

            console.log(cartItems);
            dispatch(clearCart())
        } catch (error) {
            return rejectWithValue("Can't create order");
        }
    }
);

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [createOrder.pending]: (state) => {
            state.isLoading = true
        },
        [createOrder.fulfilled]: (state, action) => {
            state.isLoading = false
            state.message = "Order is created!"
        },
        [createOrder.rejected]: (state, action) => {
            state.isLoading = false
            state.message = "Order can't be created!"
        },

    }
})

export default orderSlice.reducer
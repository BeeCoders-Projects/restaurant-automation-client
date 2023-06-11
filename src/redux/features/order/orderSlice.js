import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {clearCart} from "../cart/cartSlice";
import axios from "../../../utils/axios";

const initialState = {
    isLoading: false,
    orderId: null,
    message: null,
    dishes: [],
    totalPrice: null
}

export const createOrder = createAsyncThunk (
    'order/create',
    async (_,
           {rejectWithValue, getState, dispatch}
    ) => {
        try {
            const state = getState();
            const order_id = state.order.orderId

            const dishes =
                localStorage.getItem("cartItems") !== null
                    ? JSON.parse(localStorage.getItem("cartItems"))
                    : [];
            for (let i = 0; i < dishes.length; i++) {
                dishes[i].dish_id = dishes[i].id;
                delete dishes[i].id;
            }

            const {data} = await axios.post('/orders/create', {dishes, order_id});

            dispatch(clearCart())
            return data
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
            state.orderId = action.payload
        },
        [createOrder.rejected]: (state, action) => {
            state.isLoading = false
            state.message = "Order can't be created!"
        },

    }
})

export default orderSlice.reducer
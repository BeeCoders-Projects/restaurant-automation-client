import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {clearCart} from "../cart/cartSlice";
import axios from "../../../utils/axios";

const initialState = {
    isLoading: false,
    orderId: null,
    message: null,
    orderItems: null,
    totalPrice: 2000
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

export const getOrder = createAsyncThunk(
    'order/get',
    async (_, {rejectWithValue}) => {
        const cartItems =
            localStorage.getItem("cartItems") !== null
                ? JSON.parse(localStorage.getItem("cartItems"))
                : [];
        return await Promise.all(cartItems.map(async item => {
            try {
                const {data} = await axios.get(`/dishes/${item.id}`)
                const { id, icon, name, weight, price } = data
                return {...item, ...{ id, icon, name, weight, price }}
            } catch (error) {
                return rejectWithValue("Can't update cart");
            }
        }))
    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        // Create Order
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

        // Get order
        [getOrder.pending]: (state) => {
            state.isLoading = true
        },
        [getOrder.fulfilled]: (state, action) => {
            state.orderItems = action.payload
            state.isLoading = false
        },
        [getOrder.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default orderSlice.reducer
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
            state.orderId = action.payload
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
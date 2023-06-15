import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {clearCart} from "../cart/cartSlice";
import axios from "../../../utils/axios";

const initialState = {
    isLoading: false,
    orderId: localStorage.getItem("orderId") !== null
        ? JSON.parse(localStorage.getItem("orderId"))
        : null,
    message: null,
    dishes: null,
    totalPrice: 0,
    totalQuantity: 0
}

export const createOrder = createAsyncThunk (
    'order/create',
    async (_,
           {rejectWithValue, getState, dispatch}
    ) => {
        const dishes =
            localStorage.getItem("cartItems") !== null
                ? JSON.parse(localStorage.getItem("cartItems"))
                : [];
        if (dishes) {
            try {
                const state = getState();
                const order_id = state.order.orderId

                for (let i = 0; i < dishes.length; i++) {
                    dishes[i].dish_id = dishes[i].id;
                    delete dishes[i].id;
                }

                const {data} = await axios.post('/orders/create', {dishes, order_id});

                if (data){
                    dispatch(clearCart())
                    window.localStorage.setItem("orderId", JSON.stringify(data))
                    window.location.href = '/order';
                    return data
                }
            } catch (error) {
                return rejectWithValue("Can't create order");
            }
        }
    }
);

export const getOrder = createAsyncThunk(
    'order/get',
    async (_, {rejectWithValue, getState}) => {
        try {
            const state = getState();
            const order_id = state.order.orderId
            if (order_id) {
                const {data} = await axios.get(`/orders/${order_id}`);

                if (data.order_id === order_id){
                    return data
                } else {
                    throw Error("Order isn't same")
                }
            } else {
                throw Error("No order id")
            }
        } catch (error){
            console.log(error)
            return rejectWithValue("Can't get order");
        }
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
        [createOrder.rejected]: (state) => {
            state.isLoading = false
            state.message = "Order can't be created!"
        },

        // Get order
        [getOrder.pending]: (state) => {
            state.isLoading = true
        },
        [getOrder.fulfilled]: (state, action) => {
            state.dishes = action.payload.dishes
            state.totalPrice = action.payload.total_price
            state.totalQuantity = action.payload.dishes.reduce((total, dish) => total + dish.quantity, 0);
            state.isLoading = false
        },
        [getOrder.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default orderSlice.reducer
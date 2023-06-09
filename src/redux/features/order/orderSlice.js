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
    currentPrice: null,
    discountPrice: null,
    discountPercentage: null,
    totalQuantity: 0,
    promo: {
        code: null,
        invalid: false,
        message: null,
        isLoading: false
    },
    payment: {
        success: false,
        message: null,
        isLoading: false,
    }
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

export const getPromo = createAsyncThunk(
    'order/promo',
    async({promocode, order_id}, { rejectWithValue}) => {
        try {
            const {data} = await axios.post('/orders/promocode', {promocode, order_id});
            return {data, promocode}
        }catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const doPayment = createAsyncThunk(
    'order/payment',
    async ({order_id, payment_type, card_info}, {rejectWithValue}) => {
        try {
            const {data} = await axios.post('/orders/payment', {order_id, payment_type, card_info})

            return data
        } catch (error){
            if (error.response.status === 409){
                return error.response.data
            } else {
                return rejectWithValue(error.response.data)
            }
        }
    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearOrder: (state) => {
            state.orderId = null
        }
    },
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

            state.currentPrice = action.payload?.current_sum
            state.discountPrice = action.payload?.discount_sum
            state.discountPercentage = action.payload?.discount_percentage
        },
        [getOrder.rejected]: (state) => {
            state.isLoading = false
        },

        // Promocode
        [getPromo.pending]: (state) => {
            state.promo.message = null
            state.promo.invalid = false
            state.promo.isLoading = true
        },
        [getPromo.fulfilled]: (state, action) => {
            state.promo.message = action.payload.data
            state.promo.invalid = false
            state.promo.isLoading = false
            state.promo.code = action.payload.promocode
        },
        [getPromo.rejected]: (state, action) => {
            state.promo.message = "*Введений промокод не є доступним для застосування"
            state.promo.invalid = true
            state.promo.isLoading = false
        },

        // Payment processing

        [doPayment.pending]: (state) => {
            state.payment.isLoading = true
        },
        [doPayment.fulfilled]: (state, action) => {
            state.payment.message = action.payload
            state.payment.isLoading = false
            state.payment.success = true
        },
        [doPayment.rejected]: (state, action) => {
            state.payment.message = action.payload
            state.payment.isLoading = false
        }
    }
})

export const {clearOrder} = orderSlice.actions
export default orderSlice.reducer
export function clearLocalOrder () {
    window.localStorage.removeItem("orderId")
}


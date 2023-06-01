import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const cartItems =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const initialState = {
    items: cartItems,
    isLoading: false
}

export const updateCartItems = createAsyncThunk(
    'cart/update',
    async (_, { getState, rejectWithValue}) => {
        const { items } = getState().cart;
        return await Promise.all(items.map(async item => {
            try {
                const {data} = await axios.get(`/dishes/${item.id}`)
                return {...item, ...data}
            } catch (error) {
                return rejectWithValue("Can't update cart");
            }
        }))
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            let dish = Object.assign({}, action.payload);

            const item = state.items.find(item => item.id === dish.id)
            if(item) {
                item.count += 1;
            } else {
                dish['count'] = 1;
                state.items.push(dish)
            }
            window.localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(dish => dish.id !== action.payload);
            window.localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
    },
    extraReducers: {
        [updateCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [updateCartItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.items = action.payload
        },
        [updateCartItems.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export const isCartFulfilled = (state) => Boolean(state.cart.items.length)
export const totalCartCount = (state) => state.cart.items.reduce(
    (acc, dish) => acc + dish.count, 0);
export const totalCartPrice = (state) => state.cart.items.reduce(
    (acc, dish) => acc + (dish.price * dish.count), 0).toFixed(2);

export const {addItem, deleteItem} = cartSlice.actions
export default cartSlice.reducer

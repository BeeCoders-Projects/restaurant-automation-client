import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const cartItems =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const initialState = {
    items: [],
    isLoading: false
}

export const updateCartItems = createAsyncThunk(
    'cart/update',
    async () => {
        // const { items } = getState().cart;
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
                const { id, count, icon, name, weight, price } = dish;
                state.items.push({ id, count, icon, name, weight, price })
            }
            exportToLocal(state.items);
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(dish => dish.id !== action.payload);
            exportToLocal(state.items);
        },
        manageCartItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id)
            if (action.payload.operation === "increase" && item.count >= 1 && item.count < 100){
                item.count += 1
            } else if (action.payload.operation === "decrease" && item.count > 1 && item.count <= 100){
                item.count -= 1
            }
            exportToLocal(state.items);
        }
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

export const {
    addItem,
    deleteItem,
    manageCartItem
} = cartSlice.actions
export default cartSlice.reducer


function exportToLocal (items) {
    const result = items.map(({ id, count }) => ({ id, count }));
    window.localStorage.setItem("cartItems", JSON.stringify(result))
}
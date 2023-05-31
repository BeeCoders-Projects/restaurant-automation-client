import {createSlice} from "@reduxjs/toolkit";
import {authSlice} from "../auth/authSlice";

const initialState = {
    items: [{
        id: 2,
        icon: 'https://ras-demo-bucket.s3.amazonaws.com/dishes/2.jpg',
        name: 'BBQ',
        price: 75.5,
        weight: 165,
        special: true
    }]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const isCartFulfilled = (state) => Boolean(state.cart.items.length)
export default cartSlice.reducer

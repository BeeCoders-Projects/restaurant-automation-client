import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import dishMenuSlice from "./features/dishes/dishMenuSlice";
import dishSlice from "./features/dishes/dishSlice";
import cartSlice from "./features/cart/cartSlice";
import orderSlice from "./features/order/orderSlice";
import statSlice from "./features/stat/statSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        dishMenu: dishMenuSlice,
        dish: dishSlice,
        cart: cartSlice,
        order: orderSlice,
        stat: statSlice,
    },
})

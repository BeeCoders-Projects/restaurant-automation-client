import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import dishMenuSlice from "./features/dishes/dishesSlice";
import dishSlice from "./features/dishes/dishSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        dishMenu: dishMenuSlice,
        dish: dishSlice
    },
})

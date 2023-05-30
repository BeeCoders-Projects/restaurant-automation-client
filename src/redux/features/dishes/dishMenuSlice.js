import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from '../../../utils/axios';
import CategoryAll from "../../../img/icons/CategoryAll.svg";

const initialCategories = [
    {
        id: "specials",
        name: "Special",
        icon: CategoryAll
    },
    {
        id: null,
        name: "Все",
        icon: CategoryAll
    },
]

const initialState = {
    dishes: null,
    activeCategory: null,
    categories: null,
    isLoading: false,
}

export const getMenuDishes = createAsyncThunk(
    'dishMenu/get',
    async ({category}) => {
        try{
            const { data } = await axios.get(`/dishes${category? `?categoryId=${category}`: ""}`)
            return data
        } catch (error){
            console.log(error);
        }
    }
);

export const getCategories = createAsyncThunk(
    'dishMenu/getCategories',
    async () => {
        try {
            let initial = initialCategories
            const {data} = await axios.get('/categories');
            return initial.concat(data)
        } catch (error){
            console.log(error);
        }
    }
);

export const dishMenuSlice = createSlice({
    name: 'dishMenu',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    },
    extraReducers: {
        // Получение списка блюд
        [getMenuDishes.pending]: (state) => {
            state.loading = true
        },
        [getMenuDishes.fulfilled]: (state, action) => {
            state.loading = false
            state.dishes = action.payload
        },
        [getMenuDishes.rejected]: (state) => {
            state.loading = false
        },
        // Получение списка категорий
        [getCategories.pending]: (state) => {
            state.loading = true
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false
            state.categories = action.payload
        },
        [getCategories.rejected]: (state) => {
            state.loading = false
        },
    }});

export const { changeCategory } = dishMenuSlice.actions
export default dishMenuSlice.reducer;
import React, {useEffect} from "react";
import CategoryItem from "./CategoryItem";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../redux/features/dishes/dishMenuSlice";

export default function CategoryItemList() {
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.dishMenu)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const categoryList = categories?.map((info, idx) => <CategoryItem key={idx} info={info}/>)
    return (
        <div className="h-40 w-full flex overflow-x-auto">
            {categoryList}
        </div>
    )
}
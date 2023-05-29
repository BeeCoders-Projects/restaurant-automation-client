import DishItem from "./DishItem";
import {useDispatch, useSelector} from "react-redux";
import {getMenuDishes} from "../redux/features/dishes/dishMenuSlice";
import {useEffect} from "react";

function DishItemList(){
    const dispatch = useDispatch();
    const {dishes, activeCategory} = useSelector((state) => state.dishMenu)

    useEffect(() => {
        dispatch(getMenuDishes({category: activeCategory}))
    }, [activeCategory, dispatch])

    const dishesList = dishes?.map((dish, idx) => (<DishItem key={idx} dish={dish}/>))

    return <>
        {dishesList}
    </>
}

export default DishItemList;
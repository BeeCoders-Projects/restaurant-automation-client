import * as React from "react";
import DishItem from "./DishItem";
import {useDispatch, useSelector} from "react-redux";
import {getMenuDishes} from "../redux/features/dishes/dishesSlice";

function DishItemList(){
    const dispatch = useDispatch();
    const {dishes} = useSelector((state) => state.dish)

    console.log(dishes)

    React.useEffect(() => {
        dispatch(getMenuDishes())
    }, [dispatch])

    const dishesList = dishes?.map((dish, idx) => (<DishItem key={idx} dish={dish}/>))

    return <>
        {dishesList}
    </>
}

export default DishItemList;

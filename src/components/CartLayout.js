import {CartList} from "./CartList";
import {isCartFulfilled, updateCartItems} from "../redux/features/cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export function CartLayout() {
    const isFulfilled = useSelector(isCartFulfilled);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCartItems())
    }, [dispatch])
    return (<div className="w-[370px] h-full max-h-screen bg-gray-100 drop-shadow-2xl px-3 flex flex-col">
        <div className="h-24 text-2xl mx-2 py-7">
            <h1>Деталі замовлення</h1>
        </div>
        {isFulfilled?
            <CartList/>
            : <div className="h-fit text-2xl my-auto text-center">
            <h1>Тут нічого немає :-(</h1>
            </div>
        }

    </div>)
}
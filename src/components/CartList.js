import {CartItem} from "./CartItem";
import {useDispatch, useSelector} from "react-redux";
import {totalCartCount, totalCartPrice, updateCartItems} from "../redux/features/cart/cartSlice";
import {useEffect} from "react";

export function CartList() {
    const {items, isLoading} = useSelector((state) => state.cart)
    const totalCount = useSelector(totalCartCount);
    const totalPrice = useSelector(totalCartPrice);
    const dispatch = useDispatch();

    const itemList = items?.map((item, idx) => <CartItem key={idx} dish={item}/>)

    useEffect(() => {
        dispatch(updateCartItems())
    }, [])
    return (
        <>
            {isLoading ? <h1 className="text-2xl my-auto text-center">Loading...</h1>:
                <>
                    <div className="flex flex-col overflow-y-auto overflow-x-hidden">
                        {itemList}
                    </div>
                    <div>
                        <div className="border-t flex w-full justify-between text-xl py-5">
                            <label className="text-gray-400">Загальна кількість</label>
                            <span>{totalCount} (шт)</span>
                        </div>
                        <div className="border-y flex w-full justify-between text-2xl py-5">
                            <label>Загальна сума</label>
                            <span>{totalPrice} ₴</span>
                        </div>
                    </div>
                </>
            }

        </>
    )
}
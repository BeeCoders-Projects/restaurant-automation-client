import {CartItem} from "./CartItem";
import {useDispatch, useSelector} from "react-redux";
import {totalCartCount, totalCartPrice} from "../redux/features/cart/cartSlice";
import Button from "./Button";
import {createOrder} from "../redux/features/order/orderSlice";

export function CartList() {
    const dispatch = useDispatch();
    const {items, isLoading} = useSelector((state) => state.cart);
    const totalCount = useSelector(totalCartCount);
    const totalPrice = useSelector(totalCartPrice);

    const itemList = items?.map((item, idx) => <CartItem key={idx} dish={item}/>)

    const handleOrder = () => {
        dispatch(createOrder());
    }

    return (
        <>
            {isLoading ? <h1 className="text-2xl my-auto text-center">Loading...</h1>:
                <>
                    <div className="flex flex-col overflow-y-auto overflow-x-hidden
                    scrollbar-thumb-amber-200 scrollbar-thin scrollbar-track-gray-200">
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
                        <Button primary yellow rounded_sm content_xl
                                className="w-44 mx-auto mt-12 mb-8"
                                onClick={() => handleOrder()}
                        >Order</Button>
                    </div>
                </>
            }

        </>
    )
}
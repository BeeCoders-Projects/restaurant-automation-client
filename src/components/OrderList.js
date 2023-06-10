import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrder} from "../redux/features/order/orderSlice";
import OrderItem from "./OrderItem";
import Button from "./Button";
import {Link} from "react-router-dom";

export default function OrderList() {
    const dispatch = useDispatch();
    const {orderItems, isLoading, totalPrice} = useSelector((state) => state.order)

    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])
    const orderList = orderItems?.map((order, idx) => <OrderItem key={idx} dish={order}/>);
    return (
        <>
            {isLoading ? <h1 className="text-2xl my-auto text-center">Loading...</h1>:
                <div>
                    <h2 className="py-4">Ordered dishes</h2>
                    <div className="flex flex-col overflow-y-auto overflow-x-hidden max-h-[450px]
                    scrollbar-thumb-amber-200 scrollbar-thin scrollbar-track-gray-200">
                        {orderList}
                    </div>
                    <div className="flex items-center">
                        <Link to="/">
                            <Button primary yellow rounded_sm content_xl
                                      className="w-44 py-4 mr-8">Назад</Button>
                        </Link>
                        <div className="flex w-full justify-between text-2xl py-5">
                            <label>Всього</label>
                            <span>{totalPrice} ₴</span>
                        </div>
                    </div>
                </div>}
        </>
    )
}
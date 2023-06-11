import {useSelector} from "react-redux";
import OrderItem from "./OrderItem";
import Button from "./Button";
import {Link} from "react-router-dom";

export default function OrderList() {
    const {dishes, totalPrice} = useSelector((state) => state.order)

    const orderList = dishes?.map((order, idx) => <OrderItem key={idx} dish={order}/>);
    return (
        <>
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
                </div>
        </>
    )
}
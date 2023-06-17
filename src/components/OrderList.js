import {useSelector} from "react-redux";
import OrderItem from "./OrderItem";
import Button from "./Button";
import {Link} from "react-router-dom";

export default function OrderList() {
    const {dishes} = useSelector((state) => state.order)

    const orderList = dishes?.map((order, idx) => <OrderItem key={idx} dish={order}/>);
    return (
        <>
            <div>
                <h2 className="py-4">Страви замовлення</h2>
                <div className="flex flex-col overflow-y-auto overflow-x-hidden max-h-[450px]
                    scrollbar-thumb-amber-200 scrollbar-thin scrollbar-track-gray-200">
                    {orderList}
                </div>
                <div className="w-fit">
                    <Link to="/">
                        <Button primary yellow rounded_sm content_xl
                                className="w-44 max-h-[55px] py-4 my-5">Назад</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
import {TbNotes} from "react-icons/tb";
import OrderList from "../components/OrderList";
import DonateDrone from "../components/DonateDrone";
import {useDispatch, useSelector} from "react-redux";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getOrder} from "../redux/features/order/orderSlice";

export default function OrderPage () {
    const {orderId, isLoading} = useSelector((state) => state.order);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])
    return (
        <>
            {
                orderId ?
                    <>
                        <div className="w-full h-20 border-b-2 text-3xl flex items-center px-7">
                            <TbNotes size={44}/>
                            <h2 className="ml-4">Інформація замовлення №{orderId}</h2>
                        </div>
                        {
                            isLoading ?
                                <span className="animate-pulse text-center my-5 uppercase font-montserrat text-xl
                                tracking-widest mb-[300px]">Order Loading</span>
                                :
                                <main className="py-9 px-12 text-4xl w-full overflow-y-auto scrollbar-thumb-amber-200
             scrollbar-thin scrollbar-track-gray-200">
                                    <div className="w-full flex justify-between">
                                        <OrderList/>
                                        <DonateDrone/>
                                    </div>
                                </main>
                        }
                    </>
                    : <div className="m-auto flex flex-col items-center">
                        <span className="animate-pulse text-center my-5 uppercase font-montserrat text-xl
                                tracking-widest">Зробіть замовлення</span>
                        <Link to="/">
                            <Button primary yellow rounded_sm content_xl
                                    className="w-44 py-4">Назад</Button>
                        </Link>
                    </div>
            }
        </>
    )
}
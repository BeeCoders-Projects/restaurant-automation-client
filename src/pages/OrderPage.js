import {TbNotes} from "react-icons/tb";
import OrderList from "../components/OrderList";
import {useDispatch, useSelector} from "react-redux";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {clearLocalOrder, clearOrder, getOrder} from "../redux/features/order/orderSlice";
import PromoSection from "../components/PromoSection";
import Modal from "../components/Modal";
import PaymentPage from "./PaymentPage";
import {clearCart} from "../redux/features/cart/cartSlice";
import {changeTableStatus} from "../redux/features/auth/authSlice";

export default function OrderPage () {
    const {name} = useSelector(state => state.auth)
    const {orderId, isLoading, totalPrice,
        totalQuantity, discountPrice, currentPrice, promo,
        discountPercentage, payment} = useSelector((state) => state.order);
    const dispatch = useDispatch();
    const [modalActive, setModalActive] = useState(false);


    useEffect(() => {
        dispatch(getOrder())
    }, [promo.code, dispatch])

    const closeFunc = () => {
        if (payment.success){
            closeSession()
        } else {
            setModalActive(false)
        }
    }

    const closeSession = () => {
        dispatch(clearCart())
        dispatch(clearOrder())
        dispatch(changeTableStatus({table_name: name, status: "Free"}))

        clearLocalOrder()

        window.location.href = '/';
    }

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
                                tracking-widest mb-[300px]">Замовлення завантажується</span>
                                :
                                <main className="mt-0 pt-0 px-12 text-4xl w-full overflow-y-auto scrollbar-thumb-amber-200
             scrollbar-thin scrollbar-track-gray-200">
                                    <div className="w-full grid grid-cols-2 gap-20">
                                        <OrderList/>
                                        <div className="flex flex-col justify-center">
                                            <div className="w-[480px] h-fit
                                        rounded-xl shadow-2xl px-4 text-2xl flex flex-col self-center mr-auto">
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-400">Кількість</span>
                                                    <span>{totalQuantity} (шт)</span>
                                                </div>
                                                {discountPrice ?
                                                    <>
                                                        <div className="flex justify-between py-2">
                                                            <span className="text-gray-400">Сума без знижки</span>
                                                            <span>{totalPrice} ₴</span>
                                                        </div>
                                                        <div className="flex justify-between pt-2 pb-5">
                                                            <span className="text-gray-400">
                                                                Знижка ({discountPercentage}%)
                                                            </span>
                                                            <span className="text-red-600">- {discountPrice} ₴</span>
                                                        </div>
                                                    </> : null
                                                }
                                                <div className="flex justify-between py-5 border-y">
                                                    <span>Всього</span>
                                                    <span>{currentPrice || totalPrice} ₴</span>
                                                </div>
                                                <Button primary yellow rounded_sm content_xl
                                                        className="w-44 max-h-[55px] py-4 px-4 self-center my-6"
                                                    onClick={() => setModalActive(true)}
                                            >Оплатити</Button>
                                            </div>
                                            <PromoSection/>
                                        </div>
                                        <Modal active={modalActive} closeFunc={closeFunc}>
                                            <PaymentPage/>
                                        </Modal>
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
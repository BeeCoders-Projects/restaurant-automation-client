import Button from "./Button";
import PaymentInputs from "./PaymentInputs";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {doPayment} from "../redux/features/order/orderSlice";

export default function PaymentDebit({handleClick}) {
    const {orderId} = useSelector((state) => state.order);
    const [paymentData, setPaymentData] = useState();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(doPayment(
            {order_id: orderId,
                payment_type: "DEBIT",
                card_info: paymentData
            }))
    }
    return (
        <div className="pt-16 pb-8 flex flex-col justify-center">
            <PaymentInputs data={paymentData} setData={setPaymentData}/>
            {paymentData ? <Button yellow rounded_sm
                                   className="py-4 px-20 self-center mt-8 bg-[#FFF200] text-3xl"
                                   onClick={() => handleSubmit()}
                >Оплатити</Button>
                 : <Button rounded_sm
                             className="py-4 px-20 self-center mt-8 bg-yellow-200 text-3xl cursor-default"
                     >Оплатити</Button>
            }
            <span
                className="animate-pulse text-center mt-5 uppercase font-montserrat text-sm
                          cursor-pointer tracking-widest"
                onClick={() => handleClick('init')}
            >назад</span>
        </div>
    )
}
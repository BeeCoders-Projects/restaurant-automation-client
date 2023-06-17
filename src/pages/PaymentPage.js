import {useSelector} from "react-redux";
import {BsCreditCard} from "react-icons/bs";
import {IoWalletOutline} from "react-icons/io5";
import Button from "../components/Button";
import {useState} from "react";

export default function PaymentPage(){
    const {totalPrice, totalQuantity} = useSelector((state) => state.order);
    const [paymentMethod, setPaymentMethod] = useState('debit');


    return (
    <div className="w-full h-fit flex flex-col align-middle">
        <div className="flex justify-between py-5 text-3xl">
            <span className="text-gray-400">Кількість</span>
            <span>{totalQuantity} (шт)</span>
        </div>
        <div className="flex justify-between py-5 border-t text-3xl">
            <span>Все</span>
            <span>{totalPrice} ₴</span>
        </div>
        <div className="flex flex-col items-center">
            <label className='text-3xl my-3'>Виберіть метод оплати</label>
            <div className="flex text-xl mt-3">
                <div
                    className={`border rounded-xl py-3 px-5 flex flex-col items-center cursor-pointer mr-8 
                    ${paymentMethod === 'debit'? 'bg-stone-100 border-stone-300' : null}`}
                    onClick={() => setPaymentMethod('debit')}
                >
                    <BsCreditCard size={60}/>
                    <span>Оплата картою</span>
                </div>
                <div
                    className={`border rounded-xl py-3 px-5 flex flex-col items-center cursor-pointer
                    ${paymentMethod === 'cash'? 'bg-stone-100 border-stone-300' : null}`}
                    onClick={() => setPaymentMethod('cash')}
                >
                    <IoWalletOutline size={60}/>
                    <span>Оплата готівкою</span>
                </div>
            </div>
        </div>
        <Button yellow rounded_sm
                className="py-4 px-20 self-center mt-6 bg-[#FFF200] text-3xl"
        >Оплатити</Button>
    </div>)
}
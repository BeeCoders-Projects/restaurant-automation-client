import PaymentInit from "../components/PaymentInit";
import PaymentDebit from "../components/PaymentDebit";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {GoSync} from "react-icons/go";
import Button from "../components/Button";

export default function PaymentPage(){
    const {payment} = useSelector(state => state.order)
    const [activePage, setActivePage] = useState('init');

    useEffect(() => {
        if (payment.message) {
            setActivePage('message')
        }
    }, [payment])


    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const closeSession = () => {

    }
    return (
    <div className="w-full h-fit flex flex-col align-middle">
        {payment.isLoading ? <GoSync className="animate-spin self-center"/> :
        <>
            {activePage === 'message'?
                <>
                    <p className="text-2xl w-full text-center">{payment.message}</p>
                    <Button yellow rounded_sm
                            className="py-4 px-20 self-center mt-6 bg-[#FFF200] text-3xl"
                            onClick={() => {payment.success ? closeSession(): setActivePage('init')}}
                    >{payment.success ? "Закінчити" : "Ок"}</Button>
                </>
                : null}
            {activePage === 'init' ? <PaymentInit handleClick={handlePageChange}/> : null}
            {activePage === 'debit' ? <PaymentDebit handleClick={handlePageChange}/> : null}
        </>
        }
    </div>)
}
import PaymentInit from "../components/PaymentInit";
import PaymentDebit from "../components/PaymentDebit";
import {useEffect, useState} from "react";

export default function PaymentPage(){
    const [activePage, setActivePage] = useState('init');


    const handlePageChange = (page) => {
        setActivePage(page);
    };
    return (
    <div className="w-full h-fit flex flex-col align-middle">
        {activePage === 'init' ? <PaymentInit handleClick={handlePageChange}/> : null}
        {activePage === 'debit' ? <PaymentDebit/> : null}
    </div>)
}
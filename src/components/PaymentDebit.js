import Button from "./Button";
import PaymentInputs from "./PaymentInputs";
import {useState} from "react";

export default function PaymentDebit() {
    const [paymentData, setPaymentData] = useState();
    const handleSubmit = () => {
        console.log(paymentData)
    }
    return (
        <div className="py-16 flex flex-col justify-center">
            <PaymentInputs data={paymentData} setData={setPaymentData}/>
            {paymentData ? <Button yellow rounded_sm
                                   className="py-4 px-20 self-center mt-8 bg-[#FFF200] text-3xl"
                                   onClick={() => handleSubmit()}
                >Оплатити</Button>
                 :
                 <Button rounded_sm
                className="py-4 px-20 self-center mt-8 bg-yellow-200 text-3xl cursor-default"
                >Оплатити</Button>
            }
        </div>
    )
}
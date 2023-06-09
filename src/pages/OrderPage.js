import {TbNotes} from "react-icons/tb";
import OrderList from "../components/OrderList";

export default function OrderPage () {
    return (
        <>
            <div className="w-full h-20 border-b-2 text-3xl flex items-center">
                <TbNotes size={44}/>
                <h2 className="ml-4">Інформація замовлення №435</h2>
            </div>
            <div className="w-full flex justify-between">
                <div>
                    <h2 className="text-center py-4">Ordered dishes</h2>
                    <OrderList/>
                </div>
            </div>
        </>
    )
}
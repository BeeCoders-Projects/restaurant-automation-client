import {TbNotes} from "react-icons/tb";
import OrderList from "../components/OrderList";
import DonateDrone from "../components/DonateDrone";

export default function OrderPage () {
    return (
        <>
            <div className="w-full h-20 border-b-2 text-3xl flex items-center px-7">
                <TbNotes size={44}/>
                <h2 className="ml-4">Інформація замовлення №435</h2>
            </div>
            <main className="py-9 px-12 text-4xl w-full overflow-y-auto scrollbar-thumb-amber-200
             scrollbar-thin scrollbar-track-gray-200">
                <div className="w-full flex justify-between">
                    <OrderList/>
                    <DonateDrone/>
                </div>
            </main>
        </>
    )
}
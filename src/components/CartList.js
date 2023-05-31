import {CartItem} from "./CartItem";
import {useSelector} from "react-redux";

export function CartList() {
    const {items} = useSelector((state) => state.cart)

    const itemList = items?.map((item, idx) => <CartItem key={idx} info={item}/>)
    return (
        <>
            <div className="flex flex-col overflow-y-scroll">
                {itemList}
            </div>
            <div>
                <div className="border-t flex w-full justify-between text-xl py-5">
                    <label className="text-gray-400">Загальна кількість</label>
                    <span>4 (шт)</span>
                </div>
                <div className="border-y flex w-full justify-between text-2xl py-5">
                    <label>Загальна сума</label>
                    <span>1 640 ₴</span>
                </div>
            </div>
        </>
    )
}
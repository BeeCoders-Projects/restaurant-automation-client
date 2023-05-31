import {CartItem} from "./CartItem";

export function CartList() {
    return (
        <>
            <div className="flex flex-col overflow-y-scroll">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>

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
import {CartList} from "./CartList";

export function CartLayout() {
    const isEmpty = false
    return (<div className="w-[350px] h-full max-h-screen bg-gray-100 drop-shadow-2xl px-3 flex flex-col">
        <div className="h-24 text-2xl mx-2 py-7">
            <h1>Деталі замовлення</h1>
        </div>
        {isEmpty?
            <div className="h-fit text-2xl my-auto text-center">
                <h1>Тут нічого немає :-(</h1>
            </div>
            : <CartList/>
        }

    </div>)
}
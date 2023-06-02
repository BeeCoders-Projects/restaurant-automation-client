import {IoIosCloseCircleOutline} from "react-icons/io";
import {useDispatch} from "react-redux";
import {deleteItem, manageCartItem} from "../redux/features/cart/cartSlice";
import {useEffect, useState} from "react";

export function CartItem({dish}){
    const [highlight, setHighlight] = useState(false);

    const dispatch = useDispatch();
    const dynamicBgStyle = {
        backgroundImage: `url(${dish.icon || null})`,
    };

    const handleDelete = () => {
        dispatch(deleteItem(dish.id));
    }
    const handleManage = (operation) => {
        const num = operation === "increase" ? 1 : -1;
        const res = dish.count + num

        if (res >= 1 && res <= 100) {
            dispatch(manageCartItem({id: dish.id, operation}))
        } else {
            setHighlight(true)
        }
    }

    useEffect(() => {
        let timeout;
        if (highlight) {
            timeout = setTimeout(() => {
                setHighlight(false);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [highlight]);
    return (
        <div className="w-full py-4 flex text-xl">
            <div
                className="min-w-[140px] h-[90px] overflow-hidden
                rounded-xl bg-cover bg-center mr-6"
                style={dynamicBgStyle}
            >
            </div>
            <div className="grow flex flex-col">
                <div className="flex items-center justify-between max-w-full">
                    <label className="truncate max-w-[130px]">{dish.name}</label>
                    <IoIosCloseCircleOutline
                        onClick={() => handleDelete()}
                        size={25}
                        className="min-w-[25px] hover:text-yellow-400 cursor-pointer"/>
                </div>
                <span className="text-gray-400">{dish.weight} g</span>
                <div className="flex justify-between mt-auto unselectable">
                    <div className={`border-2 rounded transition overflow-hidden ${highlight ? 'border-red-400' : ''}`}>
                        <span className="inline-block w-5 h-full text-center
                                cursor-pointer hover:bg-gray-200"
                              onClick={() => handleManage("decrease")}
                        >-</span>
                        <span className="px-2 text-base">{dish.count}</span>
                        <span className="inline-block w-5 h-full text-center
                                    cursor-pointer hover:bg-gray-200"
                              onClick={() => handleManage("increase")}
                        >+</span>
                    </div>
                    <span className="ml-auto">{(dish.price * dish.count).toFixed(2)} ₴</span>
                </div>
            </div>
        </div>
    )
}
import {IoIosCloseCircleOutline} from "react-icons/io";
import {useDispatch} from "react-redux";
import {deleteItem} from "../redux/features/cart/cartSlice";

export function CartItem({dish}){
    const dispatch = useDispatch();
    const dynamicBgStyle = {
        backgroundImage: `url(${dish.icon || null})`,
    };

    const handleDelete = () => {
        dispatch(deleteItem(dish.id));
    }
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
                <div className="flex justify-between mt-auto">
                    <div className="border rounded">
                        <span className="inline-block w-5 h-full text-center cursor-pointer hover:bg-gray-200">-</span>
                        <span className=" px-2">{dish.count}</span>
                        <span className="inline-block w-5 h-full text-center  cursor-pointer hover:bg-gray-200">+</span>
                    </div>
                    <span className="ml-auto">{(dish.price * dish.count).toFixed(2)} ₴</span>
                </div>
            </div>
        </div>
    )
}
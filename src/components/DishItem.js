import {AiOutlineInfoCircle} from "react-icons/ai";
import {Link} from "react-router-dom";
import Button from "./Button";
import React from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/features/cart/cartSlice";

function DishItem ({dish}) {
    const dispatch = useDispatch();
    const dynamicBgStyle = {
        backgroundImage: `url(${dish.icon || null})`,
    };
    const handleAddCart = () => {
        dispatch(addItem(dish))
    }
    return (
        <div className="flex flex-wrap">
    <div className={`w-fit text-xl border ${dish.special? "border-yellow-400" : "border-zinc-200"} relative h-fit
        rounded-xl py-12 pb-6 flex flex-col items-center overflow-hidden`}>

        {dish.special? <div className="absolute py-1 px-5 text-yellow-500 top-0 left-0
        bg-yellow-300 rounded-br-xl font-bold font-montserrat text-base">
            <label>SPECIAL</label>
        </div>: null}
        <Link to={`/dish/${dish.id}`}>
            <AiOutlineInfoCircle className="absolute right-5 top-5 hover:text-yellow-400" size={30}/>
        </Link>
        <div
            className="w-[300px] h-[125px] overflow-hidden rounded-xl mb-5 bg-cover bg-center mx-6 xl:mx-12"
            style={dynamicBgStyle}
        >
        </div>
        <label className="w-full truncate text-center">{dish.name}</label>
        <div className="flex mt-10 w-full justify-between items-center px-6">
            <div className="min-w-fit mx-2">
                <p>Ціна</p>
                <p>{dish.price} грн</p>
            </div>
            <div className="min-w-fit mx-2">
                <p>Вага</p>
                <p>{dish.weight} г</p>
            </div>
            <Button
                onClick={() => handleAddCart()}
                rounded_sm yellow content_sm
                className="w-24 h-fit min-w-fit mx-2"
            >До кошика</Button>
        </div>
    </div> </div>)
}

export default DishItem;
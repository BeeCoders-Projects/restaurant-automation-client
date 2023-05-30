import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../redux/features/dishes/dishMenuSlice";

export default function CategoryItem ({info}) {
    const isSpecial = Boolean(info.id === "specials")
    const {activeCategory} = useSelector((state) => state.dishMenu);
    const dispatch = useDispatch();

    const isSelected = Boolean(activeCategory === info.id)
    const dynamicBgStyle = {
        backgroundImage: `url(${info.icon || null})`,
    };

    const handleClick = () => {
        if (!isSelected){
            dispatch(changeCategory(info.id))
        }
    }

    return (
    <div onClick={handleClick} className={`w-24 h-full rounded-full flex flex-col items-center 
    cursor-pointer mx-auto ${isSpecial? "": "pb-10"}
    py-3 justify-between  ${isSelected? "bg-yellow-300": "hover:bg-yellow-200"}
                `}>
        {!isSpecial? <div className="bg-gray-200 w-16 h-16 rounded-full bg-cover bg-center p-4 mx-3">
            <div className="bg-cover bg-center w-full h-full" style={dynamicBgStyle}></div>
        </div>:null}
        {isSpecial?
        <div className={`w-full my-auto text-center rounded-lg
            rounded-tl-2xl rounded-br-2xl h-8 leading-4 ${isSelected? "text-yellow-500": "text-white bg-yellow-400"}`}>
            <label className="font-montserrat uppercase text-base">{info.name}</label>
        </div>
        : <label className="text-lg">{info.name}</label>}

    </div>)
}
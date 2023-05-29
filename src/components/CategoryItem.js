import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../redux/features/dishes/dishMenuSlice";

export default function CategoryItem ({info}) {
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
    cursor-pointer mx-auto
    py-3 pb-10 justify-between  ${isSelected? "bg-yellow-300": "hover:bg-yellow-200"}
                `}>
        <div className="bg-gray-200 w-16 h-16 rounded-full bg-cover bg-center p-4 mx-3">
            <div className="bg-cover bg-center w-full h-full" style={dynamicBgStyle}></div>
        </div>
        <label className="text-lg">{info.name}</label>
    </div>)
}
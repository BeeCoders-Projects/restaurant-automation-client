import React from "react";
import CategoryAll from "../img/icons/CategoryAll.svg";

export default function CategoryItem ({isActive}) {
    const dynamicBgStyle = {
        backgroundImage: `url(${CategoryAll})`,
    };
    return (
    <div className={`w-24 h-full rounded-full flex flex-col items-center 
    hover:bg-yellow-200 cursor-pointer mx-auto
    py-3 pb-10 justify-between  ${isActive? "bg-yellow-300": null}
                `}>
        <div className="bg-gray-200 w-16 h-16 rounded-full bg-cover bg-center p-4 mx-3">
            <div className="bg-cover bg-center w-full h-full" style={dynamicBgStyle}></div>
        </div>
        <label className="text-lg">Все</label>
    </div>)
}
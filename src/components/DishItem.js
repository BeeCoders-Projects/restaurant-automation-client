import {AiOutlineInfoCircle} from "react-icons/ai";
import {Link} from "react-router-dom";

function DishItem ({dish}) {
    const dynamicBgStyle = {
        backgroundImage: `url(${dish.icon || null})`,
    };
    return (
        <div className="flex flex-wrap">
    <div className={`w-fit text-xl border ${dish.is_special? "border-yellow-400" : "border-zinc-200"} relative h-fit
        rounded-xl px-6 xl:px-12 py-12 pb-6 flex flex-col items-center overflow-hidden`}>

        {dish.is_special? <div className="absolute py-1 px-5 text-yellow-500 top-0 left-0
        bg-yellow-300 rounded-br-xl font-bold font-montserrat text-base">
            <label>SPECIAL</label>
        </div>: null}
        <Link to={`/dish/${dish.id}`}>
            <AiOutlineInfoCircle className="absolute right-5 top-5" size={30}/>
        </Link>
        <div
            className="w-[300px] h-[125px] overflow-hidden rounded-xl mb-5 bg-cover bg-center"
            style={dynamicBgStyle}
        >
        </div>
        <label>{dish.name}</label>
        <div className="flex mt-10 justify-between w-48">
            <div>
                <p>Ціна</p>
                <p>{dish.price} грн</p>
            </div>
            <div>
                <p>Вага</p>
                <p>{dish.weight} г</p>
            </div>
        </div>
    </div> </div>)
}

export default DishItem;
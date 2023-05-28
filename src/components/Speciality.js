import Vegetarian from "../img/icons/Vegetarian.svg";
import Vegan from "../img/icons/Vegan.svg";
import Spicy from "../img/icons/Spicy.svg";
import HotSpicy from "../img/icons/HotSpicy.svg";
import Lactose from "../img/icons/Lactose.svg";
import Gluten from "../img/icons/Gluten.svg";
import Alcohol from "../img/icons/Alcohol.svg";

function Speciality({
                        name
                    }){

    let icon = null
    let color = "#00000"

    if (name === "Vegetarian"){
        color = "#0FD12E"
        icon = <img src={Vegetarian} alt={name}/>
    } else if (name === "Vegan"){
        color = "#BDFF00"
        icon = <img src={Vegan} alt={name}/>
    } else if (name === "Lactose"){
        color = "#0085FF"
        icon = <img src={Lactose} alt={name}/>
    }else if (name === "Spicy"){
        color = "#FFC301"
        icon = <img src={Spicy} alt={name}/>
    }else if (name === "Hot Spicy"){
        color = "#C92F29"
        icon = <img src={HotSpicy} alt={name}/>
    }else if (name === "Gluten"){
        color = "#DF8042"
        icon = <img src={Gluten} alt={name}/>
    }else if (name === "Alcohol"){
        color = "#F5D840"
        icon = <img src={Alcohol} alt={name}/>
    }

    return (
        <>
            <div className="flex flex-row justify-start px-4 rounded-2xl border-2 m-2 h-[40px] max-w-[243]" style={{
                borderColor:color
            }}>
                {icon ? <div
                    className="h-[26px] w-[24px] my-1.5 mr-2"
                >
                    {icon}
                </div>
                    :null
                }
                <div style={{color:color, fontSize:"24px"}}> {name} </div>
            </div>
        </>
    );
}

export default Speciality;
import {IoIosCloseCircleOutline} from "react-icons/io";

export function CartItem(){
    const dynamicBgStyle = {
        backgroundImage: `url(https://ras-demo-bucket.s3.amazonaws.com/dishes/2.jpg)`,
    };
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
                    <label className="truncate max-w-[130px]">SushiHuushiAhahah</label>
                    <IoIosCloseCircleOutline size={25} className="min-w-[25px] hover:text-yellow-400 cursor-pointer"/>
                </div>
                <span className="text-gray-400">800 g</span>
                <div className="flex justify-between mt-auto">
                    <span>1 шт</span>
                    <span className="ml-auto">460 ₴</span>
                </div>
            </div>
        </div>
    )
}
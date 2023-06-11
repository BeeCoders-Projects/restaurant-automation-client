
export default function OrderItem({dish}) {
    const dynamicBgStyle = {
        backgroundImage: `url(${dish.icon || null})`,
    };
    return (
        <div className="w-[540px] py-4 flex text-xl">
            <div
                className="min-w-[180px] h-[110px] overflow-hidden
                rounded-xl bg-cover bg-center mr-6"
                style={dynamicBgStyle}
            >
            </div>
            <div className="grow flex flex-col">
                <div className="flex items-center justify-between max-w-full">
                    <label className="truncate max-w-[260px]">{dish.name}</label>
                </div>
                <span className="text-gray-400">{dish.weight} g</span>
                <div className="flex justify-between mt-auto unselectable">
                    <span className="px-2 text-base">{dish.quantity}</span>
                    <span className="ml-auto">{dish.price} ₴</span>
                </div>
            </div>
        </div>
    )
}
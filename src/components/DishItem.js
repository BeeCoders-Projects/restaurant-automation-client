function DishItem ({dish}) {
    const dynamicBgStyle = {
        backgroundImage: `url(${dish.icon || null})`,
    };
    return <div className="flex flex-wrap">
        <div className="text-xl border border-zinc-200 rounded-xl px-6 xl:px-12 py-12 pb-6 flex flex-col items-center">
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
        </div>
    </div>
}

export default DishItem;
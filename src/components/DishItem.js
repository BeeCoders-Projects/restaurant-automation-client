function DishItem () {
    return <div className="flex flex-wrap">
        <div className="text-xl border border-zinc-200 rounded-xl px-12 py-12 pb-6 flex flex-col items-center">
            <div
                className="w-[300px] h-[125px] overflow-hidden rounded-xl mb-5
                        bg-[url('https://ichisushi.com/wp-content/uploads/2022/05/Best-Hawaiian-Roll-Sushi-Recipes.jpg')]
                        bg-cover
                        ">
            </div>
            <label>Назва страви</label>
            <div className="flex mt-10 justify-between w-48">
                <div>
                    <p>Ціна</p>
                    <p>1200 грн</p>
                </div>
                <div>
                    <p>Вага</p>
                    <p>400 г</p>
                </div>
            </div>
        </div>
    </div>
}

export default DishItem;
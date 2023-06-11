import DishItemList from "../components/DishItemList";
import React from "react";
import CategoryItemList from "../components/CategoryItemList";

function MainMenuPage(){
    return(
        <main className="overflow-auto py-9 px-12 text-4xl w-full
        scrollbar-thumb-amber-200 scrollbar-thin scrollbar-track-gray-100">
            <CategoryItemList/>
            <div className="h-full pt-9 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <DishItemList/>
            </div>
        </main>
    )
}

export default MainMenuPage;
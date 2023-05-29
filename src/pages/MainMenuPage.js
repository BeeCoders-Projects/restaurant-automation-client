import DishItemList from "../components/DishItemList";
import React from "react";
import CategoryItemList from "../components/CategoryItemList";

function MainMenuPage(){
    return(
        <>
            <CategoryItemList/>
            <div className="h-full pt-9 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <DishItemList/>
            </div>
        </>
    )
}

export default MainMenuPage;
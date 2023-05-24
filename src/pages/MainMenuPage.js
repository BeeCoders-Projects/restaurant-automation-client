import DishItemList from "../components/DishItemList";
import React from "react";

function MainMenuPage(){

    return(
        <>
            {/*тут потом категории будем добавлять, боковое меню, хэдер 2 уровня*/}
            <div className="pt-9 flex items-center flex-wrap gap-y-6 justify-between">
                <DishItemList/>
            </div>
        </>
    )
}

export default MainMenuPage;
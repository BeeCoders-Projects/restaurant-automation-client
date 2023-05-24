import DishItemList from "../components/DishItemList";
import React from "react";

function MainMenuPage(){
    return(
        <>
            {/*тут потом категории будем добавлять, боковое меню, хэдер 2 уровня*/}
            <div className="pt-44">
                <DishItemList/>
            </div>
        </>
    )
}

export default MainMenuPage;
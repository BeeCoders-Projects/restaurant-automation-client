import MainMenuPage from "../pages/MainMenuPage";
import Header from "./Header";

function MenuLayout(){
    return (
        <>
            <div className="grid h-full">
                <Header/>
                <main className="overflow-auto pt-9 px-12 text-4xl w-full">
                    <MainMenuPage/>
                </main>
            </div>
        </>
    )
}

export default MenuLayout;
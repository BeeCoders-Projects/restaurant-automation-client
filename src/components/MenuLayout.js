import MainMenuPage from "../pages/MainMenuPage";
import Header from "./Header";

function MenuLayout(){
    return (
        <>
            <div className="grid h-full" style={{"grid-template-rows": "auto 1fr"}}>
                <Header/>
                <main className="overflow-auto py-9 px-12 text-4xl w-full">
                    <MainMenuPage/>
                </main>
            </div>
        </>
    )
}

export default MenuLayout;
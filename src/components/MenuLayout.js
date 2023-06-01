import MainMenuPage from "../pages/MainMenuPage";
import Header from "./Header";
import {CartLayout} from "./CartLayout";

function MenuLayout(){
    return (
        <>
            <div className="flex h-full">
                <div className="grid h-full flex-1" style={{"grid-template-rows": "auto 1fr"}}>
                    <Header/>
                    <main className="overflow-auto py-9 px-12 text-4xl w-full
                    scrollbar-thumb-amber-200 scrollbar-thin scrollbar-track-gray-100">
                        <MainMenuPage/>
                    </main>
                </div>
                <CartLayout/>
            </div>
        </>
    )
}

export default MenuLayout;
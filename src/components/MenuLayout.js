import MainMenuPage from "../pages/MainMenuPage";

function MenuLayout(){
    return (
        <>
            <header className="h-24 bg-[#FFFFFF] flex justify-between fixed w-full border-[#E4E4E4] border-b-2 px-7">
                <h1 className="text-5xl text-black self-center">BeeCafe</h1>
                <h1 className="text-2xl text-[#676767] self-center">Стіл 15</h1>
            </header>
            <main className="mt-30 flex items-center justify-center grow px-12 font-dark">
                <div className="text-4xl w-full
                                bg-[#FFFFFF]">
                    <MainMenuPage/>
                </div>
            </main>
        </>
    )
}

export default MenuLayout;
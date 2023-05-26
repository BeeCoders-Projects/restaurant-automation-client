import MainMenuPage from "../pages/MainMenuPage";

function MenuLayout(){
    return (
        <>
            <header className="h-32 bg-[#FFFFFF] flex justify-between fixed w-full border-[#E4E4E4] border-b-2">
                <h1 className="text-5xl text-black my-8 pl-7">Bee Cafe</h1>
                <h1 className="text-2xl text-[#676767] my-8 pr-7 self-center">Стіл 15</h1>
            </header>
            <main className="mt-32 flex items-center justify-center grow px-12 font-dark">
                <div className="text-4xl w-full
                                bg-[#FFFFFF]">
                    <MainMenuPage/>
                </div>
            </main>
        </>
    )
}

export default MenuLayout;
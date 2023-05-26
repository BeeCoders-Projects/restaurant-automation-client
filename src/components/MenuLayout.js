import MainMenuPage from "../pages/MainMenuPage";

function MenuLayout(){
    return (
        <>
            <div className="grid h-full">
                <header className="h-24 bg-[#FFFFFF] flex justify-between w-full border-[#E4E4E4] border-b-2 px-7">
                    <h1 className="text-5xl text-black self-center">BeeCafe</h1>
                    <h1 className="text-2xl text-[#676767] self-center">Стіл 15</h1>
                </header>
                <main className="overflow-auto pt-9 px-12 text-4xl w-full">
                    <MainMenuPage/>
                </main>
            </div>
        </>
    )
}

export default MenuLayout;
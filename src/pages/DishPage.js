import Header from "../components/Header";
import Button from "../components/Button"
import React from "react";
function DishPage () {
    const icon = "https://ras-demo-bucket.s3.amazonaws.com/dishes/1.jpg"
    const dynamicBgStyle = {
        backgroundImage: `url(${icon || null})`,
    };
    return (
        <>
            <div className="grid h-full">
                <Header/>
                <main className="overflow-auto w-full flex flex-col items-center px-8">
                    <div className="flex flex-col items-end xl:w-[1280px] md:w-[740px]">
                        <div className="flex w-full">
                            <div
                                className="min-w-[478px] h-[313px] overflow-hidden rounded-xl mb-5 bg-cover bg-center mr-8"
                                style={dynamicBgStyle}
                            >
                            </div>
                            <div>
                                <p className="text-4xl">Сет каліфорнія</p>
                                <p className="text-xl pt-4">Копчений лосось з додаванням вугрю та крем-сиру. Подаємо на молочній булочці з ікрою тобіко та прикрашаємо нитками чилі.</p>
                                <p className="text-xl pt-4">Копчений лосось, вугрь, крем-сир, молочна булочка, ікра тобіко, нитки чилі</p>
                                <div className="ml-auto w-fit text-2xl pt-5 flex">
                                    <p className="mr-20">1200 грн</p>
                                    <p>400 г</p>
                                </div>
                            </div>
                        </div>
                        <Button
                            style={{
                                backgroundColor:"#FFF200",
                                fontSize:"26px",
                                borderRadius:"15px",
                                width:"198px",
                                height:"49px",
                            }}
                            className="flex justify-center mt-15"
                        >На головну</Button>
                    </div>
                </main>
            </div>
        </>
    )
}

export default DishPage;
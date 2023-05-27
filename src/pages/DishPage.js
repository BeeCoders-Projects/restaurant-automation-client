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
                <main className="overflow-auto w-full flex pl-18 pr-48 pt-20">
                    <div
                        className="w-[478px] h-[313px] overflow-hidden rounded-xl mb-5 bg-cover bg-center mr-8"
                        style={dynamicBgStyle}
                    >
                    </div>
                    <div>
                        <p className="text-4xl">Сет каліфорнія</p>
                        <p className="text-xl pt-4">Копчений лосось з додаванням вугрю та крем-сиру. Подаємо на молочній булочці з ікрою тобіко та прикрашаємо нитками чилі.</p>
                        <p className="text-xl pt-4">Копчений лосось, вугрь, крем-сир, молочна булочка, ікра тобіко, нитки чилі</p>
                        <div className="text-2xl pt-4 pl-116 flex">
                            <p>1200 грн</p>
                            <p className="ml-15">400 г</p>
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
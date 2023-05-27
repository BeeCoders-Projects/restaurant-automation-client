import Header from "../components/Header";
import Button from "../components/Button"
// import {ReactComponent as Img} from "../img/filadelfiya.jpeg";
function DishPage () {
    const icon = "https://ras-demo-bucket.s3.amazonaws.com/dishes/1.jpg"
    const dynamicBgStyle = {
        backgroundImage: `url(${icon || null})`,
    };
    return (
        <>
            <div className="grid h-full">
                <Header/>
                <main className="overflow-auto text-4xl w-full flex pt-9 px-12">
                    <div
                        className="w-[478px] h-[313px] overflow-hidden rounded-xl mb-5 bg-cover bg-center mr-8"
                        style={dynamicBgStyle}
                    >
                    </div>
                    {/*<div>*/}
                    {/*    <img width="478" height="313" src="" alt="img"/>*/}
                    {/*    /!*<Img className="absolute max-w-119 max-h-78"/>*!/*/}
                    {/*</div>*/}
                    <div>
                        <h2>Сет каліфорнія</h2>
                        <p>Копчений лосось з додаванням вугрю та крем-сиру. Подаємо на молочній булочці з ікрою тобіко та прикрашаємо нитками чилі.</p>
                        <p>Копчений лосось, вугрь, крем-сир, молочна булочка, ікра тобіко, нитки чилі</p>
                        <div>
                            <p>1200 грн</p>
                            <p>400 г</p>
                        </div>
                        <Button>На головну</Button>
                    </div>
                </main>
            </div>
        </>
    )
}

export default DishPage;
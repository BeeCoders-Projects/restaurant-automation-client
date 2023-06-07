import { ReactComponent as Logo } from "../img/Logo.svg";
import Button from "../components/Button";
import Marquee from "react-double-marquee/dist/bundle.esm";

export default function StartPage() {
    return (<>
        <header className="h-32 bg-[#2D2929] flex justify-center items-center relative">
            <Logo className="absolute max-w-24 left-4"/>
            <h1 className="text-5xl text-white my-8">Bee Cafe</h1>
        </header>
        <main className="flex items-center justify-center grow py-12 font-light auth">
            <div className="w-[800px] h-[500px] shadow-lg
                            rounded-2xl bg-white bg-opacity-75 border
                            flex flex-col justify-between">
                <div className="w-full h-[315px] relative overflow-hidden rounded-t-2xl">
                    <div className="text-5xl absolute w-full h-full tracking-big top-[-50px]">
                        <div className="marquee">
                            <Marquee speed={0.06} childMargin={0} delay={0}>
                                🍍🥧🌽🌮🥕🥑🍻🍰🍯🥔🍈🥦🍲🍦🎂🍖🍹🍑🥖🍟🍏🍓🥟🍎
                            </Marquee>
                        </div>
                        <div className="marquee">
                            <Marquee speed={0.02} direction="left" childMargin={0} delay={0}>
                                🍿🍰🍟🍚🍭🥛🥨🍶🌽🌯🥜🌭🍺🍉🍇🍫🥡🍘🥖🥧🍎🥚🍏🥔
                            </Marquee>
                        </div>
                        <div className="marquee">
                            <Marquee speed={0.02} direction="right" childMargin={0} delay={0}>
                                🍶🍴🍩🥓🥦🌶️🍷🍢🥞🥛🍭🥝🍞🌽🍈🍽️🥣🍙🍣🍡🥕🍎🥤🍘
                            </Marquee>
                        </div>
                        <div className="marquee">
                            <Marquee speed={0.04} direction="right" childMargin={0} delay={0}>
                                🧀🍧🥒🥙🍎🥔🍗🍙🍣🍯🥧🍌🥐🍼🍽️🍮🥖🍳🍬🍪🥫🍖🍕🍐
                            </Marquee>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-12">
                    <div className="flex flex-col">
                        <Button className="bg-yellow-300/10 rounded-md
                        text-2xl border border-black py-5 px-24 hover:bg-yellow-300 duration-300 conic">Почати замовлення</Button>
                        <span className="animate-pulse text-center mt-5 uppercase font-montserrat text-[10px] tracking-widest">Натисніть кнопку, щоб розпочати роботу</span>
                    </div>
                </div>
            </div>
        </main>
    </>)
}
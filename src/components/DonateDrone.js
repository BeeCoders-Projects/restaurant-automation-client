import Drone from "../img/drone.png";
import Button from "./Button";

export default function DonateDrone() {
    return (
        <div className="flex-1 grow ml-20 border-2 rounded-xl flex overflow-hidden mt-8">
            <div className="m-auto min-w-[450px]
                        h-fit flex items-center justify-center">
                <div className="flex flex-col">
                    <div className="relative h-fit flex z-0">
                        <img src={Drone} alt="drone" className="z-10"/>
                        <div className="absolute w-72 h-72 bg-yellow-200 rounded-full
                                    top-[-20px] left-16 blur-[100px]"></div>
                    </div>
                    <span className="text-center my-6 uppercase font-montserrat text-xl z-10
                                tracking-widest"><p>army</p><p>of drones</p></span>
                    <Button className="bg-yellow-300/10 rounded-md max-w-full
                                                    text-2xl border border-black py-5 px-24 hover:bg-yellow-300 z-10
                                                    duration-300 conic">Задонатити</Button>
                    <span className="animate-pulse text-center mt-5 uppercase font-montserrat text-[10px]
                                tracking-widest z-10">Донат на дрони</span>
                </div>
            </div>
        </div>
    )
}
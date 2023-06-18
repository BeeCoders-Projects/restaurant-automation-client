import {AiOutlineBarChart} from "react-icons/ai";

export default function StatPage () {
    return (
        <>
            <div className="w-full h-20 border-b-2 text-3xl flex items-center px-7">
                <AiOutlineBarChart size={44}/>
                <h2 className="ml-4">Статистика використання промокодів</h2>
            </div>
        </>
    )
}
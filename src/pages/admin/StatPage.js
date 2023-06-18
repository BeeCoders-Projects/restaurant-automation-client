import {AiOutlineBarChart} from "react-icons/ai";

export default function StatPage () {
    return (
        <div className="self-start">
            <div className="w-full h-20 border-b-2 text-3xl flex items-center px-7">
                <AiOutlineBarChart size={44}/>
                <h2 className="ml-4">Статистика використання промокодів</h2>
            </div>
            <div className="p-7 w-fit">
                <div className="flex justify-between mb-4 items-center">
                    <h2 className="text-3xl">Топ 10 промокодів</h2>
                    <div>
                        <input className="rounded-xl bg-gray-200 p-2 mr-8" type="date"/>
                        <input className="rounded-xl bg-gray-200 p-2" type="date"/>
                    </div>
                </div>

                <table className="table-auto w-[875px]">
                    <thead>
                    <tr>
                        <th className="border-b"></th>
                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Власник промокоду</th>
                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Кількість використань</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">1</td>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">danlep</td>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">12</td>
                        </tr>
                        <tr>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">1</td>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">danlep</td>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">12</td>
                        </tr>
                        <tr>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">1</td>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">danlep</td>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">12</td>
                        </tr>
                        <tr>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">1</td>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">danlep</td>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
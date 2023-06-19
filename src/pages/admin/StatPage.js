import {AiOutlineBarChart} from "react-icons/ai";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPromoStat} from "../../redux/features/stat/statSlice";

export default function StatPage () {
    const [highlight, setHighlight] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const dispatch = useDispatch();
    const {promo} = useSelector(state => state.stat)

    useEffect(() => {
        if (fromDate && toDate) {
            dispatch(getPromoStat({from: fromDate, to: toDate}))
        }
    }, [fromDate, toDate])

    useEffect(() => {
        dispatch(getPromoStat({}))
    }, [])

    const handleFromDateChange = (e) => {
        const selectedFromDate = e.target.value;
        if (!toDate || selectedFromDate <= toDate) {
            setFromDate(e.target.value);
        } else {
            setHighlight('fromDate')
        }
    };

    const handleToDateChange = (e) => {
        const selectedFromDate = e.target.value;
        if (selectedFromDate >= fromDate) {
            setToDate(e.target.value);
        } else {
            setHighlight('toDate')
        }
    };


    useEffect(() => {
        let timeout;
        if (highlight) {
            timeout = setTimeout(() => {
                setHighlight(false);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [highlight]);

    const statRows = promo.map((info, idx) => <tr>
        <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">{idx + 1}</td>
        <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">{info.holder_name}</td>
        <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">{info.count}</td>
    </tr>)

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
                        <input
                            name="from_date"
                            className={`border-2
                            transition rounded-xl bg-gray-200 p-2 mr-8 
                            ${highlight === 'fromDate' ? 
                                'border-red-500': null}`}
                            type="date"
                            value={fromDate}
                            onChange={handleFromDateChange}
                        />
                        <input
                            name="to_date"
                            className={`border-2
                            transition rounded-xl bg-gray-200 p-2 
                            ${highlight === 'toDate' ?
                                'border-red-500': null}`}
                            type="date"
                            value={toDate}
                            onChange={handleToDateChange}
                        />
                    </div>
                </div>

                <div className="
                h-[500px]
                overflow-auto scrollbar-thumb-amber-200 scrollbar-thin scrollbar-track-gray-100">
                    <table className="table-auto w-[875px]">
                        <thead>
                        <tr>
                            <th className="border-b"></th>
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Власник промокоду</th>
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Кількість використань</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {statRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
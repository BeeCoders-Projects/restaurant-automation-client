import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPromo} from "../redux/features/order/orderSlice";

export default function PromoSection() {
    const [error, setError] = useState(null);

    const {promo, orderId, discountPrice} = useSelector(state => state.order);
    const [code, setCode] = useState(promo.code || '');
    const dispatch = useDispatch();

    useEffect(() => {
        if (promo.invalid) {
            setError(promo.message)
        }
    }, [promo])

    const handlePromoCodeChange = (event) => {
        let { value } = event.target;
        const regex = /^[A-Z0-9_-]*$/; // Regular expression for only Latin letters and digits

        value = value.toUpperCase();

        if (regex.test(value)) {
            setCode(value);
        }
    };

    const handleSubmit = () => {
        setError(null)
        if (code.length < 3 || code.length > 15) {
            setError("*Промокод не існує")
        } else {
            dispatch(getPromo({promocode: code, order_id: orderId}))
        }
    }
    return (
        <div className="py-14 pl-4">
            <span className="text-2xl pr-10">Промокод</span>
            <div className="inline-block relative">
                <input className={`w-[300px] h-[50px] 
            text-xl text-center border rounded-2xl 
            ${error? "border-red-500" : "border-black"}
            ${promo.code || promo.isLoading || discountPrice ? "opacity-50 bg-neutral-300" : ""}
            `}
                       placeholder="Введіть ваш промокод"
                       onChange={(e) => handlePromoCodeChange(e)}
                       value={code}
                       onBlur={() => handleSubmit()}
                       maxLength={15}
                       disabled={promo.code || promo.isLoading || discountPrice}
                />
                <p className="text-red-600 text-base absolute top-13">{error}</p>
            </div>
        </div>
    )
}
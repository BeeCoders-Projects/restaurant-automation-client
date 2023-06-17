import React, {useEffect, useState} from 'react';
import InputMask from 'react-input-mask';

export default function PaymentInputs({data , setData}) {
    const [cardNumberError, setCardNumberError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [cvvError, setCvvError] = useState(false);

    const [cardNumber, setCardNumber] = useState();
    const [cardDate, setCardDate] = useState();
    const [cardCvv, setCardCvv] = useState();

    const currentYear = new Date().getFullYear();
    const minYear = currentYear;
    const maxYear = currentYear + 50;

    useEffect(() => {
        if (cardNumber && cardDate && cardCvv){
            setData({number: cardNumber, expire_at: cardDate, cvv: cardCvv})
        } else {
            setData(null)
        }
    }, [cardNumber, cardDate, cardCvv, setData])

    const handleCardNumberChange = (e) => {
        setCardNumber(null)
        const enteredCardNumber = e.target.value.replace(/\s/g, '');

        if (enteredCardNumber.length !== 16) {
            setCardNumberError(true)
        } else if (!validateCreditCardNumber(enteredCardNumber)){
            setCardNumberError(true)
        } else {
            setCardNumberError(false)
            setCardNumber(enteredCardNumber)
        }
    }
    const handleDateChange = (e) => {
        setCardDate(null)
        const enteredDate = e.target.value;
        const month = parseInt(enteredDate.substring(0, 2));
        const year = 2000 + parseInt(enteredDate.substring(3, 5));

        if (year < minYear || year > maxYear || !year) {
            setDateError(true)
        } else if (month < 1 || month > 12 || !month){
            setDateError(true)
        } else {
            setDateError(false)
            setCardDate(enteredDate)
        }
    }

    const handleCvvChange = (e) => {
        setCardCvv(null)
        const enteredCvv = e.target.value;

        if (enteredCvv.length !== 3){
            setCvvError(true)
        } else {
            setCvvError(false)
            setCardCvv(enteredCvv)
        }
    }

    return (
        <div className="flex flex-col card text-2xl">
            <label className="relative w-full">
                <InputMask
                    mask="9999 9999 9999 9999"
                    className={`rounded-xl border w-full h-16 peer px-8 py-2 
                    ${cardNumberError ? 'border-red-500' : 'border-zinc-500'}`}
                    maskChar=""
                    onChange={e => handleCardNumberChange(e)}
                />
                <label className={`absolute bg-white
                top-[-16px] left-4 text-sm p-1 uppercase
                ${cardNumberError ? 'text-red-500' : 'text-zinc-500'}`}>Card number</label>
                {
                    cardNumberError ? <p className="mt-2 text-red-500 text-sm absolute top-14">
                        *Неправильний формат номеру карти
                    </p> : null
                }
            </label>
            <div className="flex mt-8">
                <label className="relative mr-8">
                    <InputMask
                        mask="99/99" // Replace with your desired mask format
                        placeholder="MM/YY"
                        maskChar=""
                        className={`rounded-xl border w-full h-16 peer px-8 py-2 
                        ${dateError ? 'border-red-500' : 'border-zinc-500'}
                        `}
                        onChange={e => handleDateChange(e)}
                    />
                    <label className={`absolute bg-white
                            top-[-16px] left-4 text-sm p-1 uppercase 
                            ${dateError ? 'text-red-500' : 'text-zinc-500'}`}>
                        Exp Date</label>
                    {
                        dateError ? <p className="mt-2 text-red-500 text-sm absolute top-14">
                            *Неправильний формат дати закінчення дії карти
                        </p> : null
                    }
                </label>
                <label className="relative">
                    <InputMask
                        mask="999" // Replace with your desired mask format
                        className={`rounded-xl border w-full h-16 peer px-8 py-2 
                        ${cvvError ? 'border-red-500' : 'border-zinc-500'}`}
                        maskChar=""
                        type="password"
                        onChange={e => handleCvvChange(e)}
                    />
                    <label className={`absolute bg-white
                top-[-16px] left-4 text-sm p-1 uppercase ${cvvError ? 'text-red-500' : 'text-zinc-500'}`}>CVV</label>
                    {
                        cvvError ? <p className="mt-2 text-red-500 text-sm absolute top-14">
                            *Неправильний формат CVV
                        </p> : null
                    }
                </label>
            </div>
        </div>
    );
}


function validateCreditCardNumber(cardNumber) {
    // Remove any non-digit characters
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    let sum = 0;
    let double = false;

    // Iterate over each digit from right to left
    for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanedCardNumber.charAt(i), 10);

        // Double every second digit
        if (double) {
            digit *= 2;

            // If the result is two digits, sum the digits
            if (digit > 9) {
                digit = (digit % 10) + 1;
            }
        }

        sum += digit;
        double = !double;
    }

    // Check if the sum is divisible by 10
    return sum % 10 === 0;
}
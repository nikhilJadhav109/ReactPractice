import React, { useId } from 'react'

 
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDiasabled = false,
    currencyDisable = false,
    className = "",
}) 
{
    const amountInput = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-xl  flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInput} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    id={amountInput}
                    type="number"
                    min={0}
                    placeholder="Amount"
                    disabled={amountDiasabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-2 py-1  bg-orange-200 cursor-pointer outline-none  text-center font-bold uppercase"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    >
                    
                    {currencyOptions.map((currency) => (<option className='bg-orange-100 ' value={currency} key={currency}>
                        {currency}
                    </option>))}
                    

                </select>
            </div>
        </div>
    );
}

export default InputBox;

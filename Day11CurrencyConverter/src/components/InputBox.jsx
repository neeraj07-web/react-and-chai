import React, {useId} from 'react'

// copied it from currency.md
// input box mei kya kya user se lene chahte ho
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], // i want you  to pass it in array ,if you dont pass it --> i'll take an empty array
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    // optimization by hook in react --> useId
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} // by default it is false , but if someone added amount it will not be false
                    value={amount} //value amount se lelo

                    // && onAmountChange is a checker to check whether it exist or not
                    // can give a string --> convert it to a Number
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // value from selectCurrency

                    // agar currency change toh OncurrencyChange se ho jayega woh
                    // give a string --> no problem --> "usd" is a string
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}

                    disabled={currencyDisable}
                >
                  {/* loop laga do --> using lop */}
                  {/* agar loops chahiye toh key ka use katcr lo , usse performance achi hogi */}
                  {/* remember the key in loops in react */}
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
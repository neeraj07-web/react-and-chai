import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  // states 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd") // by default usd
  const [to, setTo] = useState("inr") // by default inr
  const [convertedAmount, setConvertedAmount] = useState(0) /// initially  if not entered anything default 

  const currencyInfo = useCurrencyInfo(from) // line 9 --> from

  const options = Object.keys(currencyInfo) // we can get all the keys using Objects.keys --> kiski keys chaiye mujhe --> currencyInfo ki --{usd , inr ,uke, dub, aus}

  // swapping 2 variable--> just a method
  const swap = () => {
    setFrom(to) // setFrom k andar "to" ki value set kardo
    setTo(from) // setTo mei set kardo from ki value
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  // when on clicking convert --> what happens
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
  <h1 className='text-center text-4xl bg-sky-600  mb-4'>Currency Convertor</h1>
    <div
  
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options} //currency options kahan se aynge --> upar jo options meilikhe thay --> jismei sari keys store ki thi ---> using Object.keys
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}

                            selectCurrency={to}
                            // selectCurrency={from} // if we make here the change we will get the diff currency in both the  cyyrency like
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      {/* {usd} to {inr} ---> {from} to {to} --> if we want them to be in uppercase , then use .toUpperCase */}
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
);
}

export default App
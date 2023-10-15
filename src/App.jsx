import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Exchangeapp from './Components/Exchangeapp'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [to, setTo]=useState("inr");
   const [from, setFrom]=useState("usd");
   const [convertAmount, setConvertedAmount] = useState(0);
        

    const CurrencyInfo = useCurrencyInfo(from) 
    const options =Object.keys(CurrencyInfo)

    const swap =()=>{
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertAmount)
    }
     const convert = (  )=> {
      setConvertedAmount(amount * CurrencyInfo [to])
     }
  return (
    <>

      <div className="exchange-mainbox">

               <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Exchangeapp
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                             
                            

                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn cus-btn-primary"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Exchangeapp
                            label="To"
                            amount={convertAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <div className='text-center'>
                    <button type="submit" className='btn  cus-btn-primary w-75 '>
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    </div>
                </form>
      </div>
      
      
    </>
  )
}

export default App;




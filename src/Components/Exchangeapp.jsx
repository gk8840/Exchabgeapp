import {useId} from 'react'
import './exchange.css'


// 
function Exchangeapp ({
     
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions= [],
    selectCurrency="usd",
    amountDisable=false,
    currecyDisable=false,
    className =""
}) {

  

 const amountInputId = useId();


        
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="">
                            <div className="inputmainbox">
                                <div
                                    className="row">
                                    <div className="col-6">
                                        <label htmlFor={amountInputId} className='form-label'>{label}</label>
                                        <div className="row">
                                            <div className="col-12">
                                            <div className="mb-3">
                                                    {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                                                    <input type="number" 
                                                    id={amountInputId}
                                                    className="form-control cus-form-control" placeholder='0' aria-describedby="emailHelp" 
                                                    disabled={amountDisable}
                                                     value={amount}
                                                     onChange={(e)=> onAmountChange && onAmountChange(Number (e.target.value))}/>
                                                    
                                                </div>                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 text-end">
                                        <label htmlFor="" className='form-label'>Currency Type</label>
                                        <select className="form-select  ms-auto cus-form-control " aria-label="Default select example" style={{width:"85px"}} value={selectCurrency}
                                        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                                        disabled={currecyDisable}
                                        >
                                             {currencyOptions.map((Currency)=>(
                                                 <option  key={Currency}value={Currency}>
                                                    
                                                    {Currency}
                                                 </option>
                                             ))}
                                            {/* <option selected>Open this select menu</option> */}
                                            
                                           
                                          
                                        </select>
                                    </div>
                                </div>
                                 
                            </div>
                             {/* <div className="swapbox text-center">
                                 <button className='btn cus-btn-primary'  onClick={swap}>Swap</button>
                             </div> */}

                             {/* 2 */}
                             

                             {/* <div className="buttonbox text-center">
                                 <button className='btn  cus-btn-primary w-75 'onClick={convert}>Convert USD to INR</button>
                             </div>    */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Exchangeapp;
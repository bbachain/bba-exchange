import { useState, useEffect } from 'react'
import { splitorCoin, priceFormatter } from "../../utils/galexsa"
import Range from "./Range"
import Input from "./Input"

function OCO({ symbol }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs items-center justify-center">
            <div className="space-y-1.5 grid mt-1">
                <div className="flex justify-between items-center">
                    <p>Avbl</p>
                    <div className="flex space-x-1 items-center">
                        <p>-</p>
                        <p>{splitorCoin(symbol, 1)}</p>
                    </div>
                </div>
                <Input currency={splitorCoin(symbol, 1)} type={["Price"]} value={0.0} />
                <Input currency={splitorCoin(symbol, 1)} type={["Stop"]} value={0.0} />
                <Input currency={splitorCoin(symbol, 1)} type={["Limit"]} value={0.0} />
                <Input currency={splitorCoin(symbol, 0)} type={["Amount"]} value={0.0} />
                <Range />
                <div className="flex justify-center items-center space-x-1 bg-white/20 hover:bg-white hover:text-black rounded-md p-2">
                    <button className="text-primary" onClick={() => console.log()}>Log In</button>
                    <p>or</p>
                    <button className="text-primary" onClick={() => console.log()}>Register Now</button>
                    <p>to trade</p>
                </div>
            </div>
            <div className="space-y-1.5 grid mt-1">
                <div className="flex justify-between items-center">
                    <p>Avbl</p>
                    <div className="flex space-x-1 items-center">
                        <p>-</p>
                        <p>{splitorCoin(symbol, 0)}</p>
                    </div>
                </div>
                <Input currency={splitorCoin(symbol, 1)} type={["Price"]} value={0.0} />
                <Input currency={splitorCoin(symbol, 1)} type={["Stop"]} value={0.0} />
                <Input currency={splitorCoin(symbol, 1)} type={["Limit"]} value={0.0} />
                <Input currency={splitorCoin(symbol, 0)} type={["Amount"]} value={0.0} />
                <Range />
                <div className="flex justify-center items-center space-x-1 bg-white/20 hover:bg-white hover:text-black rounded-md p-2">
                    <button className="text-primary" onClick={() => console.log()}>Log In</button>
                    <p>or</p>
                    <button className="text-primary" onClick={() => console.log()}>Register Now</button>
                    <p>to trade</p>
                </div>
            </div>
        </div>
    )
}

export default OCO
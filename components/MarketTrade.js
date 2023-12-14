import { useState } from "react"
import TradeStreams from "./TradeStreams"
function MarketTrade() {
    const [tabMTPosition, setTabMTPosition] = useState(0)
    return (
        <div className="text-white text-sm p-1 sm:px-3 relative lg:border-t-[.5px] border-white/20 w-full">
            <div>
                <div className="flex justify-between items-center py-1">
                    <div className="flex space-x-3 text-md font-black">
                        <div className={tabMTPosition == 0 ? 'text-primary' : "cursor-pointer"}
                            onClick={() => setTabMTPosition(0)}>Market Trades</div>
                        <div className={tabMTPosition == 1 ? 'text-primary' : "cursor-pointer"}
                            onClick={() => setTabMTPosition(1)}>My Trade</div>
                    </div>
                    <div className={tabMTPosition == 2 ? 'text-primary' : "cursor-pointer"}
                        onClick={() => setTabMTPosition(2)}>Alerts</div>
                </div>
                <div className="h-[17rem] md:h-[11rem] lg:h-[19rem] scrollbar-hide overflow-hidden">
                    <div className={tabMTPosition !== 0 ? "hidden" : ""}>
                        <TradeStreams />
                    </div>
                    <div className={tabMTPosition !== 1 ? "hidden" : "grid justify-center items-center h-full mt-1"}>
                        <div className="flex items-center space-x-1">
                            <button className="text-primary" onClick={() => console.log()}>Log In</button>
                            <p>or</p>
                            <button className="text-primary" onClick={() => console.log()}>Register Now</button>
                            <p>to trade</p>
                        </div>
                    </div>
                    <div className={tabMTPosition !== 2 ? "hidden" : "grid justify-center items-center h-full mt-1"}>
                        <div className="flex items-center space-x-1">
                            <button className="text-primary" onClick={() => console.log()}>Log In</button>
                            <p>or</p>
                            <button className="text-primary" onClick={() => console.log()}>Register Now</button>
                            <p>to trade</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketTrade
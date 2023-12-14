import { useState } from 'react'

function OrderTabs() {
    const [tabOrderPosition, setTabOrderPosition] = useState(0)

    return (
        <div className="text-sm text-white/75 p-4 relative items-center border-t-[.5px] border-white/20">
            <div>
                <div className="flex justify-left items-center py-1 space-x-4 font-bold ">
                    <div className={tabOrderPosition == 0 ? 'text-primary' : "cursor-pointer"}
                        onClick={() => setTabOrderPosition(0)}
                    >Open Orders(0)</div>
                    <div className={tabOrderPosition == 1 ? 'text-primary' : "cursor-pointer"}
                        onClick={() => setTabOrderPosition(1)}
                    >Order History</div>
                    <div className={tabOrderPosition == 2 ? 'text-primary' : "cursor-pointer"}
                        onClick={() => setTabOrderPosition(2)}
                    >Trade History</div>
                </div>
                <div className="h-[15rem]">
                    <div className={tabOrderPosition !== 0 ? "hidden" : "grid justify-center items-center h-full mt-1"}>
                        <div className="flex items-center space-x-1">
                            <button className="text-primary" onClick={() => console.log()}>Log In</button>
                            <p>or</p>
                            <button className="text-primary" onClick={() => console.log()}>Register Now</button>
                            <p>to trade</p>
                        </div>
                    </div>
                    <div className={tabOrderPosition !== 1 ? "hidden" : "grid justify-center items-center h-full mt-1"}>
                        <div className="flex items-center space-x-1">
                            <button className="text-primary" onClick={() => console.log()}>Log In</button>
                            <p>or</p>
                            <button className="text-primary" onClick={() => console.log()}>Register Now</button>
                            <p>to trade</p>
                        </div>
                    </div>
                    <div className={tabOrderPosition !== 2 ? "hidden" : "grid justify-center items-center h-full mt-1"}>
                        <div className="flex items-center space-x-1">
                            <button className="text-primary" onClick={() => console.log()}>Log In</button>
                            <p>or</p>
                            <button className="text-primary" onClick={() => console.log()}>Register Now</button>
                            <p>to trade</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OrderTabs
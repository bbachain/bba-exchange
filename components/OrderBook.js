import { useState, useEffect } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import Loading from "./Loading"
import { splitorCoin, priceFormatter } from "../utils/galexsa"
import { useRecoilState } from 'recoil';
import { symbolState } from "../atom/symbolAtom"
import ListboxDown from "./ListboxDown"
import PopOver from "./PopOver"
import useWidth from "../hooks/useWidth"
import { getOrderBookSymbol } from "../CustomData"

function OrderBook() {
    const width = useWidth();
    const [orderBs, setOrderBs] = useState({});
    const [depth, setDepth] = useState(20);
    const [positionOrderbook, setPositionOrderbook] = useState("askbid");
    const [priceMain, setPriceMain] = useState({ c: 0, s: false });
    const [symbol, setSymbol] = useRecoilState(symbolState);

    useEffect(() => {
        const json = getOrderBookSymbol
        setOrderBs(prevState => ({ ...prevState, ...json }))
    }, [symbol, depth]);

    useEffect(() => {
        if (width < 1024) {
            setDepth(5)
        } else {
            setDepth(20)
        }
    }, [width]);

    useEffect(() => {
        const p = parseFloat(document.title.split("|")[0].replaceAll(",", ""))
        setPriceMain({
            c: p, s: priceMain.c < p
        })
    }, [orderBs]);

    const depthList = [0.001, 0.01, 1, 10, 50, 100]
    const [selectedDepth, setSelectedDepth] = useState(depthList[0])

    const OrderBookSetting = [
        {
            name: 'Empty!!',
            href: "#",
        },
    ]

    return (
        <div className="text-xs text-white/75 pt-4 sm:p-4 relative items-center lg:border-r-[.5px] lg:border-t-[.5px] border-white/20 w-full">
            {Object.keys(orderBs).length === 0 && <Loading cl="absolute top-20 lg:top-40 " />}
            {Object.keys(orderBs).length === 0 && <Loading cl="absolute bottom-20 lg:bottom-40 " />}
            <div className="pb-2 flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                    <button onClick={() => setPositionOrderbook("askbid")}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v7H4V4z" className="fill-green-500" fill="#F6465D"></path><path d="M4 13h7v7H4v-7z" fill="none" className="fill-red-500"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>
                    </button>
                    <button onClick={() => setPositionOrderbook("bid")}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v16H4V4z" className="fill-green-500" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>
                    </button>
                    <button onClick={() => setPositionOrderbook("ask")}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v16H4V4z" className="fill-red-500" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>
                    </button>
                </div>
                <div className="flex space-x-2 items-center">
                    <div>
                        <ListboxDown selected={selectedDepth} setSelected={setSelectedDepth} list={depthList} />
                    </div>
                    <div>
                        <PopOver list={OrderBookSetting} title={<EllipsisVerticalIcon className="h-5 w-5" />} col="1" lg={false} float="right-0" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 text-right mb-2">
                <p className="text-left">Price({splitorCoin(symbol, 1)})</p>
                <p>Amount({splitorCoin(symbol, 0)})</p>
                <p>Total</p>
            </div>
            {["ask", "askbid"].includes(positionOrderbook) && <div className="min-h-[6rem] lg:min-h-[20rem]">
                {Object.keys(orderBs).length !== 0 && orderBs.asks.map((ob, i) => (
                    <div key={i} style={{ "--depth-size": ob[2] + "%" }} className="py-[0.5px] bg-depth grid grid-cols-3 from-red-500/10 bg-gradient-to-l to-red-500/10 bg-right bg-no-repeat">
                        <p className="text-red-500">{priceFormatter(ob[0])}</p>
                        <p className="text-right">{priceFormatter(ob[1])}</p>
                        <p className="text-right">{priceFormatter(ob[1] * ob[0])}</p>
                    </div>
                )).reverse()}
            </div>
            }
            <div className="flex justify-between items-center py-2 text-white/50">
                <div className="grid grid-cols-2 space-x-2 items-center">
                    <p className={`text-xl ${priceMain.s ? "text-green-500" : "text-red-500"}`}>{priceFormatter(priceMain.c)}</p>
                    <p>${priceFormatter(priceMain.c)}</p>
                </div>
                <p className="cursor-pointer">More</p>
            </div>
            {["bid", "askbid"].includes(positionOrderbook) && <div className="min-h-[6rem] lg:min-h-[20rem]">
                {Object.keys(orderBs).length !== 0 && orderBs.bids.map((ob, i) => (
                    <div key={i} style={{ "--depth-size": ob[2] + "%" }} className="py-[0.5px] bg-depth grid grid-cols-3 from-green-500/10 bg-gradient-to-l to-green-500/10 bg-right bg-no-repeat">
                        <p className="text-green-500">{priceFormatter(ob[0])}</p>
                        <p className="text-right">{priceFormatter(ob[1])}</p>
                        <p className="text-right">{priceFormatter(ob[1] * ob[0])}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default OrderBook
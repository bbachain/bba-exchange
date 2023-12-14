import { useState, useEffect } from 'react'
import { StarIcon, MagnifyingGlassIcon, ChevronDownIcon, ChevronUpIcon, BellIcon, RectangleStackIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Loading from "./Loading"
import { splitorCoin, priceFormatter } from "../utils/galexsa"
import { useRecoilState } from 'recoil';
import { symbolState } from "../atom/symbolAtom"
import Modal from "./Modal"
import useWidth from "../hooks/useWidth"
import { getListSymbols } from "../CustomData"

function ListSymbols() {
    const width = useWidth();
    const [showList, setShowList] = useState(true);
    const [bids, setBids] = useState({});
    const [stars, setStars] = useState([]);
    const [toggelStars, setToggelStars] = useState(false);
    const [sortMarket, setSortMarket] = useState({ key: 's', status: true });
    const [keySymbol, setKeySymbol] = useState("BUSD");
    const ListMotherSymbols = ["BUSD", "USDT", "BTC", "ETH"]
    const [symbol, setSymbol] = useRecoilState(symbolState);
    const [isAlertOpen, setIsAlertOpen] = useState(false)

    useEffect(() => {
        if (width < 768) {
            setShowList(false)
        } else {
            setShowList(true)
        }
    }, [width]);

    useEffect(() => {
        setBids(getListSymbols)
    }, [symbol]);

    const f1 = (item) => {
        return item.s.includes(keySymbol)
    }
    const f2 = (item) => {
        return stars.includes(item.s)
    }

    const AlertHtml = () => {
        return (
            <div className="grid justify-center items-center h-16 mt-1">
                <div className="flex items-center space-x-1 text-black">
                    <button className="text-primary" onClick={() => console.log()}>Log In</button>
                    <p>or</p>
                    <button className="text-primary" onClick={() => console.log()}>Register Now</button>
                    <p>to trade</p>
                </div>
            </div>
        )
    }
    return (
        <div className="text-white/50 text-xs p-1 px-3">
            <div className="pb-3 pt-1">
                <div className="flex w-full bg-primary-900 px-3 py-1.5 rounded-lg items-center">
                    <MagnifyingGlassIcon className="h-4 w-4 mr-2" />
                    <input className="flex-1 uppercase bg-transparent outline-none" placeholder='Search' type="text" onChange={e => setKeySymbol(e.target.value.toUpperCase())} />
                    {width < 768 && <button onClick={() => setShowList(!showList)}> {showList ? <XMarkIcon className="h-4 w-4 mr-2" /> : <RectangleStackIcon className="h-4 w-4 mr-2" />}</button>}
                </div>
            </div>
            {showList &&
                <>
                    <div className="flex space-x-3 pb-3 justify-between">
                        <div className="flex space-x-3">
                            <button onClick={() => setToggelStars(!toggelStars)}>
                                <StarIcon className={`h-4 w-4 ${toggelStars ? "fill-primary" : ""}`} />
                            </button>

                            {ListMotherSymbols.map((e, i) => (
                                <div key={i} className="">
                                    <button onClick={() => setKeySymbol(e)} className={keySymbol === e ? "text-primary" : ""}>{e}</button>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setIsAlertOpen(true)}>
                            <BellIcon className="h-4 w-4" />
                        </button>
                        <Modal isOpen={isAlertOpen} setIsOpen={setIsAlertOpen} title="Set alert price" html={AlertHtml()} />
                    </div>
                    <div className="grid grid-cols-3 m-2">
                        <div className="cursor-pointer flex text-left ml-5 items-center" onClick={() => setSortMarket({ key: "s", status: !sortMarket.status })}>
                            <p className="">pair</p>
                            <div className="block ml-1 cursor-pointer">
                                <ChevronUpIcon className={`h-2 w-2 ${sortMarket.key == "s" && sortMarket.status ? "fill-primary" : ""}`} />
                                <ChevronDownIcon className={`h-2 w-2 ${sortMarket.key == "s" && !sortMarket.status ? "fill-primary" : ""}`} />
                            </div>
                        </div>
                        <div className="cursor-pointer flex justify-end items-center" onClick={() => setSortMarket({ key: "c", status: !sortMarket.status })}>
                            <p className="">price</p>
                            <div className="block ml-1 cursor-pointer">
                                <ChevronUpIcon className={`h-2 w-2 ${sortMarket.key == "c" && !sortMarket.status ? "fill-primary" : ""}`} />
                                <ChevronDownIcon className={`h-2 w-2 ${sortMarket.key == "c" && sortMarket.status ? "fill-primary" : ""}`} />
                            </div>
                        </div>
                        <div className="cursor-pointer flex justify-end items-center" onClick={() => setSortMarket({ key: "P", status: !sortMarket.status })}>
                            <p className="">change</p>
                            <div className="block ml-1 cursor-pointer">
                                <ChevronUpIcon className={`h-2 w-2 ${sortMarket.key == "P" && !sortMarket.status ? "fill-primary" : ""}`} />
                                <ChevronDownIcon className={`h-2 w-2 ${sortMarket.key == "P" && sortMarket.status ? "fill-primary" : ""}`} />
                            </div>
                        </div>
                    </div>
                    <div className="scrollbar-hide overflow-scroll h-[10rem] lg:h-[20rem] relative">
                        {Object.keys(bids).length === 0 && <Loading cl="absolute top-20 " />}
                        {bids && Object.values(bids).filter(item => !toggelStars && f1(item) || toggelStars && f2(item)).sort((a, b) => sortMarket.status ? (a[sortMarket.key] > b[sortMarket.key]) ? 1 : -1 : (a[sortMarket.key] < b[sortMarket.key]) ? 1 : -1).map((item, index) => (
                            <div key={item.s} className="grid grid-cols-3">
                                <div className="flex">
                                    <button onClick={() => stars.includes(item.s) ? setStars(stars.filter(it => it !== item.s)) : setStars([...stars, item.s])}>
                                        <StarIcon className={`h-4 w-4 ${stars.includes(item.s) ? "fill-primary" : ""}`} />
                                    </button>
                                    <button onClick={() => setSymbol(item.s)} className="w-16">
                                        <p className="px-3"><span className="text-white font-bold">{splitorCoin(item.s, 0)}</span>/{splitorCoin(item.s, 1)}</p>
                                    </button>
                                </div>
                                <p className="px-3 text-right"> {priceFormatter(item.c)}</p>
                                <p className={`px-2 text-right ${parseFloat(item.P) < 0 ? "text-red-500" : "text-green-500"}`}>{priceFormatter(item.P, 2)}%</p>
                            </div>
                        ))}
                    </div>
                </>}

        </div>
    )
}

export default ListSymbols

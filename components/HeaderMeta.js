import { useState, useEffect } from 'react'
import { splitorCoin, priceFormatter } from "../utils/galexsa"
import { PlayIcon, BookOpenIcon } from '@heroicons/react/24/solid'
import { useRecoilState } from 'recoil';
import { symbolState } from "../atom/symbolAtom"
import useWidth from "../hooks/useWidth"
import { getMetaDataSymbol } from "../CustomData"

function HeaderMeta() {
    const width = useWidth();
    const [info, setInfo] = useState({});
    const [cprice, setCprice] = useState({ c: 0, E: 0, s: false });
    const [symbol, setSymbol] = useRecoilState(symbolState);

    useEffect(() => {
        const json = getMetaDataSymbol
        setInfo(prevState => ({ ...prevState, ...json }))
    }, [symbol]);


    useEffect(() => {
        if (cprice.E !== info.E) {
            setCprice({ c: info.c, E: info.E, s: cprice.c < info.c })
        }
    }, [info]);


    return (
        <div className="flex space-x-6 py-2 px-4 text-white items-center text-xs scrollbar-hide overflow-x-scroll">
            <div className="pr-6 border-r-[0.5px] border-white/50">
                <div className="text-lg font-medium">{splitorCoin(info.s, 0) + "/" + splitorCoin(info.s, 1)}</div>
                <div className="text-white/50 flex">
                    <BookOpenIcon className="h-4 w-4 mr-1" />
                    <p>Analytics</p>
                </div>
            </div>
            <div className="flex-1 flex space-x-3">
                <div className=" w-20">
                    <p className={`text-base -mt-1 ${cprice.s ? "text-green-500" : "text-red-500"}`}>{priceFormatter(info.c)}</p>
                    <p className="">${priceFormatter(info.c)}</p>
                </div>
                <div className=" w-24">
                    <p className="text-white/50 mb-1">24h Change</p>
                    <div className={`flex space-x-1 ${0 < info.p ? "text-green-500" : "text-red-500"}`}>
                        <p>{priceFormatter(info.p)}</p>
                        <p>{priceFormatter(info.P, 2)}%</p>
                    </div>
                </div>
                <div className=" w-20">
                    <p className="text-white/50 mb-1">24h High</p>
                    <p>{priceFormatter(info.h)}</p>
                </div>
                <div className=" w-20">
                    <p className="text-white/50 mb-1">24h Low</p>
                    <p>{priceFormatter(info.l)}</p>
                </div>
                <div className=" w-28">
                    <p className="text-white/50 mb-1">24h Volume({splitorCoin(info.s, 0)})</p>
                    <p>{priceFormatter(info.v)}</p>
                </div>
                <div className=" w-28">
                    <p className="text-white/50 mb-1">24h Volume({splitorCoin(info.s, 1)})</p>
                    <p>{priceFormatter(info.q)}</p>
                </div>
            </div>
            {width >= 1024 &&
                <div className="text-white/50 flex">
                    <PlayIcon className="h-4 w-4 mr-1" />
                    <p>Spot Tutorial</p>
                </div>}
        </div>
    )
}

export default HeaderMeta

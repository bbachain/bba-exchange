import { useState } from 'react'
import { ChartBarIcon, LockClosedIcon, ArrowDownTrayIcon, GlobeAltIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/solid'
import { splitorCoin, priceFormatter } from "../utils/galexsa"
import PopOver from "./PopOver"
import { useRecoilState } from 'recoil';
import { symbolState } from "../atom/symbolAtom"
import useWidth from "../hooks/useWidth"

function Footer({ popularList }) {
    const width = useWidth();
    const [symbol, setSymbol] = useRecoilState(symbolState);
    const FooterMarketSetting = [
        {
            name: 'Popular',
            href: "#",
        },
        {
            name: 'Favorite',
            href: "#",
        }
    ]
    const PluginsSetting = [
        {
            name: 'Ticker',
            href: "#",
        },
        {
            name: 'Mirror',
            href: "#",
        }, {
            name: 'Hot Action',
            href: "#",
        },
        {
            name: 'Faster',
            href: "#",
        }
    ]

    return (
        <div className="text-xs text-white/75 px-1 py-1 relative items-center border-t-[.5px] border-white/20">
            <div className="flex items-center">
                <div className="flex items-center space-x-1 text-green-500">
                    <ChartBarIcon className="h-4 w-4" />
                    <p>Stable connection</p>
                </div>
                <div className="flex flex-1 items-center space-x-1 px-3">
                    {width >= 1024 &&
                        <>
                            <PopOver list={FooterMarketSetting} title={<AdjustmentsVerticalIcon className="h-4 w-4 mt-1" />} col="1" lg={false} float="bottom-6" />
                            <div className="flex items-center space-x-3">
                                {popularList && Object.values(popularList).map((item, i) => (
                                    <div key={i} className="flex space-x-2">
                                        <button onClick={() => setSymbol(item.s)}>
                                            <p className="px-1"><span className="text-white">{splitorCoin(item.s, 0)}</span>{splitorCoin(item.s, 1)}</p>
                                        </button>
                                        <p className="px-1"> {priceFormatter(item.c)}</p>
                                        <p className={`px-1 ${parseFloat(item.P) < 0 ? "text-red-500" : "text-green-500"}`}>{priceFormatter(item.P, 2)}%</p>
                                    </div>
                                ))}
                            </div>
                        </>}
                </div>
                <div className="flex items-center space-x-1 px-1">
                    <LockClosedIcon className="h-3 w-3" />
                    <a href="#">by -</a>
                </div>
                <div className="hidden sm:flex items-center space-x-1 px-1">
                    <ArrowDownTrayIcon className="h-3 w-3" />
                    <PopOver list={PluginsSetting} title={<span>Plugins</span>} col="1" lg={true} float="bottom-4 right-0" />
                </div>
                <div className="hidden sm:flex items-center space-x-1 px-1">
                    <GlobeAltIcon className="h-3 w-3" />
                    <button>Online Support</button>
                </div>
            </div>
        </div>
    )
}

export default Footer

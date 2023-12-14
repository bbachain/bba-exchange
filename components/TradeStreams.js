import { useState, useEffect } from 'react'
import { DotsVerticalIcon, ChevronDownIcon } from '@heroicons/react/solid'
import Loading from "./Loading"
import { splitorCoin, priceFormatter } from "../utils/galexsa"
import { useRecoilState } from 'recoil';
import { symbolState } from "../atom/symbolAtom"
import CustomHead from "./CustomHead"
import { getTradeStreams } from "../CustomData"
function TradeStreams() {
	const [lastPrice, setLastPrice] = useState(0)
	const [tradePrice, setTradePrice] = useState([]);
	const [symbol, setSymbol] = useRecoilState(symbolState);

	useEffect(() => {
		const json = getTradeStreams
		setLastPrice(json.p)
		setTradePrice((oldArray) => [[json.p, json.q, json.m, new Date(json.T).toLocaleTimeString()], ...oldArray.slice(0, 20)])
	}, [symbol]);


	return (
		<>
			<CustomHead SYMBOL={symbol} PRICE={priceFormatter(lastPrice)} />
			<div className="text-xs text-white/75 mt-3 relative">
				{tradePrice.length === 0 && <Loading cl="absolute top-40 " />}
				<div className="grid grid-cols-3 text-right mb-2">
					<p className="text-left">Price({splitorCoin(symbol, 1)})</p>
					<p>Amount({splitorCoin(symbol, 0)})</p>
					<p>Time</p>
				</div>
				<div className="scrollbar-hide overflow-scroll h-[20rem] pb-5">
					{tradePrice && tradePrice.map((ob, i) => (
						<div key={i} className="py-[0.5px] grid grid-cols-3">
							<p className={ob[2] ? "text-red-500" : "text-green-500"}>{priceFormatter(ob[0])}</p>
							<p className="text-right">{priceFormatter(ob[1])}</p>
							<p className="text-right">{ob[3]}</p>
						</div>
					))}
				</div>
			</div>
		</>

	)
}

export default TradeStreams
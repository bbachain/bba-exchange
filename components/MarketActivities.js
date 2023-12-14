import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/solid'
import { splitorCoin, priceFormatter } from "../utils/galexsa"
import { useRecoilState } from 'recoil';
import { symbolState } from "../atom/symbolAtom"
function MarketActivities({ popularList }) {
	const [symbol, setSymbol] = useRecoilState(symbolState);

	return (
		<div className="text-white/50 grid text-xs p-4 pt-1 h-[6.5rem] border-t-[.5px] border-white/20 scrollbar-hide overflow-x-hidden">
			<p className="text-white font-bold text-lg pb-1">Market Activities</p>
			{popularList && Object.values(popularList).slice(0, 2).map((item, i) => (
				<div key={item.s} className="grid grid-cols-3 justify-center items-center">
					<div>
						<button onClick={() => setSymbol(item.s)}>
							<p><span className="text-white">{splitorCoin(item.s, 0)}</span>/{splitorCoin(item.s, 1)}</p>
						</button>
						<p>{new Date(item.E).toLocaleTimeString()}</p>
					</div>
					<div>
						<p className={`px-2 text-right ${parseFloat(item.P) < 0 ? "text-red-500" : "text-green-500"}`}>{priceFormatter(item.P, 2)}%</p>
						<p className="px-3 text-right text-white"> {item.e}</p>
					</div>
					<div className="flex justify-end">
						{parseFloat(item.P) < 0 ? <ArrowTrendingUpIcon className="h-7 w-7 text-red-500" /> : <ArrowTrendingDownIcon className="h-7 w-7 text-green-500" />}
					</div>
				</div>
			))}
		</div>
	)
}

export default MarketActivities
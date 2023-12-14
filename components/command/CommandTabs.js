import { EllipsisVerticalIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { useState } from "react"
import PopOver from "../PopOver"
import Limit from "./Limit"
import Market from "./Market"
import StopLimit from "./StopLimit"
import OCO from "./OCO"
import { useRecoilState } from 'recoil';
import { symbolState } from "../../atom/symbolAtom"

function Commanddivs() {
	const [symbol, setSymbol] = useRecoilState(symbolState);
	const [tabCommandPosition, setTabCommandPosition] = useState(0)

	const SpotSetting = [
		{
			name: 'Rules',
			href: "#",
		},
		{
			name: 'FAQ',
			href: "#",
		}, {
			name: 'Tutorial',
			href: "#",
		},
	]
	const LMSO_Setting = [
		{
			name: 'Tutorial',
			href: "#",
		},
	]
	return (
		<div className="text-sm text-white/75 relative items-center ">
			<div>
				<div className="flex justify-between items-center">
					<div className={`py-4 px-10 font-bold ${true ? 'text-white bg-primary-900 border-t-2 border-primary' : ''}`
					}>Spot</div>
					<PopOver list={SpotSetting} title={<EllipsisVerticalIcon className="h-5 w-5" />} col="1" lg={false} float="right-0" />
				</div>
				<div className="bg-primary-900 px-3 py-2">
					<div>
						<div>
							<div className="flex items-center space-x-4">
								<div className={`font-semibold cursor-pointer ${tabCommandPosition == 0 ? 'text-primary' : ''}`}
									onClick={() => setTabCommandPosition(0)}
								>Limit</div>
								<div className={`font-semibold cursor-pointer ${tabCommandPosition == 1 ? 'text-primary' : ''}`}
									onClick={() => setTabCommandPosition(1)}
								>Market</div>
								<div className={`font-semibold cursor-pointer ${tabCommandPosition == 2 ? 'text-primary' : ''}`}
									onClick={() => setTabCommandPosition(2)}
								>Stop-limit</div>
								<div className={`font-semibold cursor-pointer ${tabCommandPosition == 3 ? 'text-primary' : ''}`}
									onClick={() => setTabCommandPosition(3)}
								>OCO</div>
								<PopOver list={LMSO_Setting} title={<InformationCircleIcon className="h-3 w-3" />} col="1" lg={false} float="left-0" />
							</div>
							<div className="pt-1 sm:h-[17rem]">
								<div className={tabCommandPosition !== 0 ? "hidden" : ""}>
									<Limit symbol={symbol} />
								</div>
								<div className={tabCommandPosition !== 1 ? "hidden" : ""}>
									<Market symbol={symbol} />
								</div>
								<div className={tabCommandPosition !== 2 ? "hidden" : ""}>
									<StopLimit symbol={symbol} />
								</div>
								<div className={tabCommandPosition !== 3 ? "hidden" : ""}>
									<OCO symbol={symbol} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Commanddivs


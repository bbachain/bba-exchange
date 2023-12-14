import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
	Chart,
	Header,
	ListSymbols,
	HeaderMeta,
	OrderBook,
	MarketTrade,
	MarketActivities,
	CommandTabs,
	OrderTabs,
	Footer
} from "../components"
import { useState, useEffect } from 'react'
import useWidth from "../hooks/useWidth"
import { getListSymbols } from "../CustomData"



const Home: NextPage = () => {

	const width = useWidth();
	const [popularList, setpopularList] = useState({});

	useEffect(() => {
		const json = getListSymbols
		setpopularList(prevState => ({ ...prevState, ...json }))
	}, []);


	return (
		<div>
			<Head>
				<title>CHARTSA</title>
			</Head>
			<main className="bg-black scrollbar-hide overflow-y-scroll">
				{/* header */}
				<Header />
				{/* alert */}
				<div></div>
				<div className="lg:flex">
					{/* left */}
					<div className="lg:w-3/4">
						{/* info */}
						{width < 768 && <ListSymbols />}
						<div className="w-full lg:h-16">
							<HeaderMeta />
						</div>
						<div className="flex flex-col-reverse md:flex-row">
							{/* left */}
							<div className="md:w-1/3">
								{width >= 768 && width < 1024 && <ListSymbols />}
								<div className="grid sm:flex md:flex-col justify-around">
									<OrderBook />
									{width < 1024 && <MarketTrade />}
								</div>
							</div>
							{/* center */}
							<div className="md:w-2/3">
								<Chart />
								<CommandTabs />
							</div>

						</div>

					</div>
					{/* right */}
					{width >= 1024 && <div className="lg:w-1/4">
						<ListSymbols />
						<MarketTrade />
						<MarketActivities popularList={popularList} />
					</div>}
				</div>
				<OrderTabs />
				<Footer popularList={popularList} />
			</main>
		</div>
	)
}

export default Home

import { useState } from 'react'
import { UsersIcon, CreditCardIcon, ChartPieIcon, CurrencyDollarIcon, CommandLineIcon, Bars4Icon, XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import Modal from "./Modal"
import PopOver from "./PopOver"
import useWidth from "../hooks/useWidth"
function Header() {
    const width = useWidth();
    let [cur, setCur] = useState(false)
    let [lang, setLang] = useState(false)
    let [menu, setMenu] = useState(false)

    const listMenu = ["Markets", "Finance", "Earn", "ICO", "NFT"]
    const listCurrency = ["USD-$", "GBP-£", "AUD-A$", "CNY-¥", "JPY-圓"]
    const listLanguage = ["English", "French", "German"]
    const solutionsSetting = [
        {
            name: 'Profile',
            icon: UsersIcon,
            href: "#",
        },
        {
            name: 'Wallet',
            icon: CreditCardIcon,
            href: "#",
        },
    ]

    const TradeDocumentation = () => {
        return (
            <div className="p-4 bg-gray-50">
                <a
                    href="#"
                    className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                    <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                            Documentation
                        </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                    </span>
                </a>
            </div>
        )
    }
    const solutionsTrade = [
        {
            name: 'Convert',
            description: 'Measure actions your users take',
            href: "#",
            icon: ChartPieIcon,
        },
        {
            name: 'Wallet',
            description: 'Create your own targeted content',
            href: "#",
            icon: CurrencyDollarIcon,
        },
        {
            name: 'Classic',
            description: 'Keep track of your growth',
            href: "#",
            icon: CommandLineIcon,
        },
    ]

    const CurrencyHtml = () => {
        return (<div className="my-2 pt-5 grid grid-cols-3 gap-6" >
            {
                listCurrency.map((e, i) => (
                    <a key={i} href="#" className="hover:bg-black hover:text-white px-4 py-1 rounded-lg">{e}</a>
                ))
            }
        </div >)
    }
    const LanguageHtml = () => {
        return (<div className="my-2 pt-5 grid grid-cols-3 gap-6" >
            {
                listLanguage.map((e, i) => (
                    <a key={i} href="#" className="hover:bg-black hover:text-white px-4 py-1 rounded-lg">{e}</a>
                ))
            }
        </div >)
    }
    return (
        <div>
            <nav className="flex justify-between p-3 items-center border-b-[.5px] border-white/20 text-sm lg:space-x-16">
                <a href="#" className="text-2xl font-bold tracking-wide text-primary-100">CHARTSA</a>
                <button className="block lg:hidden" onClick={() => setMenu(true)}><Bars4Icon className="h-5 w-5 text-white" /></button>
                <div className={width > 1024 ? "flex flex-1" : `bg-primary-900 w-full space-y-3 z-10 flex flex-col items-left absolute top-0 left-0 p-6 rounded-b-2xl shadow-2xl transition-transform origin-top duration-300 ease-out ${menu ? "visible scale-100" : "invisible scale-y-0"}`}>
                    <button className="block lg:hidden right-4 top-4 absolute" onClick={() => setMenu(false)}><XMarkIcon className="h-5 w-5 text-white" /></button>
                    <div className="grid grid-cols-1 lg:flex lg:flex-1 space-y-4 lg:space-y-0 lg:space-x-8 lg:items-center">
                        {listMenu.map((e, i) => (
                            <div key={i} className="text-white group">
                                <a href="#">{e}</a>
                                <div className={e !== "Home" && "bg-white h-0.5 scale-x-0 group-hover:scale-100 rounded-full transition-transform origin-left duration-300 ease-out"} />
                            </div>
                        ))}
                        <PopOver title="Trade" list={solutionsTrade} Documentation={TradeDocumentation()} col="2" lg={true} />
                    </div>
                    <hr className="block lg:hidden border-white/20" />
                    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center space-x-1">
                            <button className="flex justify-center items-center text-white h-13 px-5 py-1 font-medium rounded-xl hover:shadow-md transition-shadow duration-300">Login</button>
                            <button className="flex justify-center items-center text-white h-13 bg-primary-400 px-3 py-1 font-medium rounded-xl hover:shadow-md transition-shadow duration-300">Register</button>
                        </div>
                        <div className="grid grid-cols-2 divide-x">
                            <button
                                type="button"
                                onClick={() => setLang(true)}
                                className="font-medium text-white px-3"
                            >
                                English
                            </button>
                            <Modal isOpen={lang} setIsOpen={setLang} title="Choose a language" html={LanguageHtml()} />
                            <button
                                type="button"
                                onClick={() => setCur(true)}
                                className="font-medium text-white px-3"
                            >
                                USD
                            </button>
                            <Modal isOpen={cur} setIsOpen={setCur} title="Choose a currency" html={CurrencyHtml()} />
                        </div>
                        <div className="flex items-center space-x-1">
                            <PopOver float="right-0" title={<Cog6ToothIcon className="w-6 h-6" />} list={solutionsSetting} col="1" lg={false} />
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header


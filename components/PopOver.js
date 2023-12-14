import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function PopOver({ title, list, Documentation, col = "2", float, lg = true }) {

    return (
        <>
            <div className="relative group cursor-pointer">
                <div
                    className={`text-white group rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    {typeof title === 'string' ? <span>{title}</span> : title}
                    {typeof title === 'string' && <ChevronDownIcon
                        className={`ml-2 h-5 w-5 text-primary-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                        aria-hidden="true"
                    />}
                </div>
                <div className="hidden group-hover:block">
                    <div className={`absolute z-10 ${Documentation && "w-screen max-w-sm"} px-4 transform ${float ? float : "-translate-x-1/2 left-1/2"} sm:px-0 ${lg && "lg:max-w-3xl"}`}>
                        <div className="scrollbar-hide overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className={`relative grid gap-8 bg-white p-7 lg:grid-cols-${col}`}>
                                {list.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                        {item.icon &&
                                            <div className={`flex items-center justify-center flex-shrink-0 ${col !== "1" ? "w-10 h-10" : "h-5 w-5"} text-primary-800`}>
                                                <item.icon aria-hidden="true" />
                                            </div>
                                        }
                                        <div className={item.icon && col !== "1" ? "ml-4" : "ml-2"}>
                                            <p className="text-sm font-medium text-gray-900">
                                                {item.name}
                                            </p>
                                            {item.description &&
                                                <p className="text-sm text-gray-500">
                                                    {item.description}
                                                </p>
                                            }
                                        </div>
                                    </a>
                                ))}
                            </div>
                            {Documentation}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PopOver



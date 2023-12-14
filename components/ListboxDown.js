import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'

export default function ListboxDown({ selected, setSelected, list, title }) {

    return (
        <>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                    <Listbox.Button className="flex text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-black focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        {title ? title : <span className="block truncate">{selected}</span>}
                        <span className="flex items-center pr-2 pointer-events-none">
                            <ChevronUpDownIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute py-1 mt-1 scrollbar-hide overflow-auto text-base right-0 bg-primary-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {list.map((item, itemIdx) => (
                                <Listbox.Option
                                    key={itemIdx}
                                    className={({ active }) =>
                                        `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-primary-900 bg-primary-100' : 'text-white'
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {item}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </>
    )
}

import { Fragment } from 'react'

function Modal({ isOpen, setIsOpen, title, html }) {
    return (
        <>
            <div
                className={isOpen ? "fixed inset-1 z-10 scrollbar-hide overflow-y-auto" : "hidden"}
                onClick={() => setIsOpen(false)}
            >
                <div className="min-h-screen flex justify-center items-center">
                    <div className="bg-primary/10 backdrop-blur-sm fixed h-full w-full top-0 left-0" />
                    <div className="inline-block w-full max-w-md p-6 my-8 scrollbar-hide overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <h5
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                            {title}
                        </h5>
                        {html}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
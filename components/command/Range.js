import {useState} from 'react'

function Range() {
    const [rangeN, setRangeN] = useState(0)
    return (
        <div className="relative group">
            <input style={{ background: `linear-gradient(to right, #fff 0%, #fff ${rangeN.toString()}%, rgb(255 255 255 / 0.2) ${rangeN.toString()}%, rgb(255 255 255 / 0.2) 100%)` }}
                onChange={(e) => (setRangeN(e.target.valueAsNumber))} type="range"
                value={rangeN.toString()} min="0" max="100" step="1" className="w-full" />
            <div className="w-full justify-between flex mt-1 px-1">
                <button onClick={() => setRangeN(0)} className="w-1 h-1 hover:-m-1 hover:w-3 hover:h-3 bg-white/50 rounded-lg items-center justify-center flex">
                </button>
                <button onClick={() => setRangeN(25)} className="w-1 h-1 hover:-m-1 hover:w-3 hover:h-3 bg-white/50 rounded-lg items-center justify-center flex">
                </button>
                <button onClick={() => setRangeN(50)} className="w-1 h-1 hover:-m-1 hover:w-3 hover:h-3 bg-white/50 rounded-lg items-center justify-center flex">
                </button>
                <button onClick={() => setRangeN(75)} className="w-1 h-1 hover:-m-1 hover:w-3 hover:h-3 bg-white/50 rounded-lg items-center justify-center flex">
                </button>
                <button onClick={() => setRangeN(100)} className="w-1 h-1 hover:-m-1 hover:w-3 hover:h-3 bg-white/50 rounded-lg items-center justify-center flex">
                </button>
            </div>
            <div style={{ "left": rangeN.toString() + "%" }} className="py-1 px-2 bg-primary -top-7 -ml-4 absolute text-xs scale-y-0 group-hover:scale-100 rounded-md transition-transform origin-bottom duration-200 ease-in">{rangeN}%</div>
        </div>
    )
}

export default Range
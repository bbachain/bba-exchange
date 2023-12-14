import React from 'react'
function Input({ type, currency, value, disabled = false }) {
    return (
        <div className={`w-full flex items-center ${disabled ? "bg-white/50" : "bg-white/20 hover:border-primary"} rounded-md p-2 border-2 border-transparent space-x-2`}>
            <p>{type}</p>
            {typeof value === 'string' ?
                <input
                    type="text"
                    defaultValue={value}
                    disabled={disabled}
                    className="outline-none bg-transparent flex-1 text-right"
                />
                : <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max="10000"
                    defaultValue={value}
                    disabled={disabled}
                    className="outline-none bg-transparent flex-1 text-right"
                />}
            <p>{currency}</p>
        </div>
    )
}

export default Input
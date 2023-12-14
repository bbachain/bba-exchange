export const getListSymbols = [{
    "s": "GLXSBTC",// Symbol
    "P": "0",// Price change percent
    "c": "0.00254500",// Last price
    "E": 123456789,     // Event time
}, {
    "s": "BTCBUSD",
    "P": "0",
    "c": "0.00254500",
    "E": 123456789,     // Event time
}, {
    "s": "BTCUSDT",
    "P": "-10",
    "c": "0.00254500",
    "E": 123456789,     // Event time
}]

export const getTradeStreams = {
    "s": "BTCUSDT",// Symbol
    "p": "20146.60000000",// Price
    "q": "0.27306000",// Quantity
    "T": 123456785,   // Trade time
    "m": true,        // Is the buyer the market maker?
}


export const getMetaDataSymbol = {
    "s": "BTCUSDT",// Symbol
    "p": "-680.35000000",// Price change
    "P": "-3.227",// Price change percent
    "w": "20793.24047373",// Weighted average price
    "x": "21082.87000000", // First trade(F)-1 price (first trade before the 24hr rolling window)
    "c": "20402.53000000",// Last price
    "Q": "0.00207000",// Last quantity
    "o": "21082.88000000",// Open price
    "h": "21723.00000000",// High price
    "l": "19950.34000000",// Low price
    "v": "88044.46100000",// Total traded base asset volume
    "q": "1830729649.95332390",// Total traded quote asset volume
}


export const getOrderBookSymbol = {
    "bids": [ // Bids to be updated
        [
            "20259.30000000",// Price level to be updated
            "3.00420000",// Quantity
            60 //Volume percentage
        ]
    ],
    "asks": [// Asks to be updated
        [
            "20267.95000000",// Price level to be updated
            "0.04930000",// Quantity
            4.310194089875853 //Volume percentage
        ]
    ]
}
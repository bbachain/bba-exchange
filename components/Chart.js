import { useEffect } from 'react'
import useScript from '../hooks/useScript';
import { useRecoilState } from 'recoil';
import { symbolState } from "../atom/symbolAtom"
function Chart() {
    const [symbol, setSymbol] = useRecoilState(symbolState);
    const tradingview = useScript('https://s3.tradingview.com/tv.js');

    useEffect(() => {
        if (tradingview) {
            new TradingView.widget(
                {
                    "width": "100%",
                    "height": 450,
                    "symbol": "BINANCE:" + symbol.toUpperCase(),
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "dark",
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#f1f3f6",
                    "enable_publishing": false,
                    "container_id": "tradingview_068d5"
                }
            );
        }
    }, [tradingview, symbol]);

    return (
        <div>
            <div className="">
                <div id="tradingview_068d5"></div>
            </div>
        </div>
    )
}

export default Chart

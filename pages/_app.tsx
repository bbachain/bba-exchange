import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import { MarketWrapper } from '../context/MarketContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MarketWrapper>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MarketWrapper>
  )
}

export default MyApp

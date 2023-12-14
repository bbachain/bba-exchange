// src/context/state.js
import { createContext, useContext } from 'react';
const MarketContext = createContext();

export function MarketWrapper({ children }) {
  return (
    <MarketContext.Provider value={{}}  >
      {children}
    </MarketContext.Provider>
  );
}

export function useMarketContext() {
  return useContext(MarketContext);
}
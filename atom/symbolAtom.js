import { atom } from 'recoil';
export const symbolState = atom({
    key: 'symbolState', // unique ID (with respect to other atoms/selectors)
    default: 'BTCUSDT', // default value (aka initial value)
});
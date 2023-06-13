import { useRecoilState, useRecoilValue } from 'recoil';
import { calculateState, comparedTag } from '../atom/SelectModal/ExchangeAtoms';
import { useGetTokensData } from './useGetTokensData';

export const useCalculateTotal = (inputValue: number) => {
  const exchangeState = useRecoilValue(calculateState);
  const tokensData = useGetTokensData();

  if (exchangeState.price) {
    return inputValue * Number(exchangeState.price);
  } else if (tokensData && tokensData.length > 0 && tokensData[0].price) {
    return inputValue * Number(tokensData[0].price);
  }

  return inputValue;
};

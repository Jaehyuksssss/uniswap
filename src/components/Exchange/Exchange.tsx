import { useState, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { comparedTag, calculateState } from '../../atom/SelectModal/ExchangeAtoms';
import { useCalculateTotal } from '../../hooks/useCalculateTotal';
import {
  ExchangeContianer,
  ExchangeWrapper,
  ExchangeHeader,
  RateBoxWrapper,
  RateBox,
  CalculateBox,
  ConnectWalletBtn,
  OutputBox,
} from './Exchange.style';
import ExchangeTag from './ExchangeTag';
import SelectedTag from './SelectedTag';

const Exchange = () => {
  const [comparedModalTag, setComparedModalTag] = useRecoilState(comparedTag);
  const [exchangeState] = useRecoilState(calculateState);
  const [inputValue, setInputValue] = useState<number>(exchangeState.price);
  const calculateTotal = useCalculateTotal(inputValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 100000000) {
      setInputValue(value);
    }
  };

  const calculatedAmount =
    comparedModalTag.price && calculateTotal ? (comparedModalTag.price / exchangeState.price) * inputValue : inputValue;
  const calculatedOutput =
    comparedModalTag.price && calculateTotal
      ? ((comparedModalTag.price / calculateTotal) * inputValue).toFixed(5)
      : inputValue.toFixed(5);

  return (
    <ExchangeContianer>
      <ExchangeWrapper>
        <ExchangeHeader>Header</ExchangeHeader>
        <RateBoxWrapper>
          <RateBox>
            <CalculateBox>
              <input type="number" value={inputValue} onChange={handleInputChange} min="1" max="100000000" />
              {exchangeState.currency ? exchangeState.currency : '$'}
              {exchangeState.price !== undefined ? calculateTotal : 0}
            </CalculateBox>
            <ExchangeTag />
          </RateBox>
          <RateBox>
            <OutputBox>
              <div>
                {calculatedAmount} {exchangeState.name}
              </div>
              <div>
                {comparedModalTag.currency ? comparedModalTag.currency : '$'}
                {comparedModalTag.price ? calculatedOutput : calculatedOutput}
              </div>
            </OutputBox>
            <SelectedTag />
          </RateBox>
        </RateBoxWrapper>
        <ConnectWalletBtn>
          <span>Select tokens</span>
        </ConnectWalletBtn>
      </ExchangeWrapper>
    </ExchangeContianer>
  );
};

export default Exchange;

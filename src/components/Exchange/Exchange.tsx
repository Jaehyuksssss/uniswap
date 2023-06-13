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
  CalculateInput,
  CalculateOutput,
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
    if (value >= 0 && value <= 100000000) {
      setInputValue(value);
    }
  };

  const calculatedAmount =
    comparedModalTag.price && calculateTotal ? calculateTotal / comparedModalTag.price : inputValue;

  return (
    <ExchangeContianer>
      <ExchangeWrapper>
        <ExchangeHeader>Swap</ExchangeHeader>
        <RateBoxWrapper>
          <RateBox>
            <CalculateBox>
              <CalculateInput
                type="text"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder="0"
                value={inputValue.toString()}
                onChange={handleInputChange}
              />

              {exchangeState.currency ? exchangeState.currency : '$'}
              {exchangeState.price !== undefined ? calculateTotal : 0}
            </CalculateBox>
            <ExchangeTag />
          </RateBox>
          <RateBox>
            <OutputBox>
              <CalculateOutput>
                {calculatedAmount} {comparedModalTag.tag}
              </CalculateOutput>
              {comparedModalTag.currency ? comparedModalTag.currency : '$'}
              {comparedModalTag.price ? calculateTotal : calculateTotal}
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

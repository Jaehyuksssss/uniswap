import {
  ExchangeHeader,
  ExchangeWrapper,
  RateBox,
  ExchangeContianer,
  RateBoxWrapper,
  ConnectWalletBtn,
} from './Exchange.style';

export default function Exchange() {
  return (
    <ExchangeContianer>
      <ExchangeWrapper>
        <ExchangeHeader>Header</ExchangeHeader>
        <RateBoxWrapper>
          <RateBox>a</RateBox>
          <RateBox>b</RateBox>
        </RateBoxWrapper>
        <ConnectWalletBtn>
          <span>Connect Wallet</span>
        </ConnectWalletBtn>
      </ExchangeWrapper>
    </ExchangeContianer>
  );
}

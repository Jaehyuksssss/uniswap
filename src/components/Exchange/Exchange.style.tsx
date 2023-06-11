import styled from 'styled-components';
import { theme } from '../../styles';

export const ExchangeContianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 462px;
  height: 324px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 90%;
    height: auto;
    padding: 20px;
  }
`;

export const ExchangeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 12px 8px 8px;
  border: 1px solid ${theme.GREY_MEDIUM};
  border-radius: 16px;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 576px) {
    padding: 16px;
  }
`;

export const ExchangeHeader = styled.div`
  margin-bottom: 10px;
  height: 32px;
  color: rgb(119, 128, 160);
  font-size: 18px;
  font-weight: 600;
`;

export const RateBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const RateBox = styled.div`
  width: 446px;
  height: 96px;
  position: relative;
  background-color: rgb(245, 246, 252);
  border-radius: 12px;
  padding: 16px;
  color: rgb(119, 128, 160);
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 12px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ConnectWalletBtn = styled.button`
  background: rgba(251, 17, 142, 0.12);
  width: 100%;
  height: 100%;
  align-self: center;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${theme.LIGHT_PINK};
  }

  span {
    color: ${theme.PINK};
    font-family: 'Inter custom', sans-serif;
    font-size: 20px;
    font-weight: 600;
  }
`;

import styled from 'styled-components';
import { theme } from '../../styles';

export const ExchangeContianer = styled.div`
  width: 462px;
  height: 324px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
export const ExchangeHeader = styled.span`
  margin-bottom: 10px;
  margin-left: 10px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px 8px;
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
`;
export const CalculateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const CalculateInput = styled.input`
  font-size: 30px;
`;
export const CalculateOutput = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
`;
export const OutputBox = styled.div`
  display: flex;
  flex-direction: column;
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
export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 84px;
  height: 40px;
  border: 1px solid rgb(210, 217, 238);
  border-radius: 16px;
  padding: 6px 12px 6px 6px;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 16px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const TagButton = styled.button`
  display: flex;
  align-items: center;
  img {
    margin: 2px;
  }
`;

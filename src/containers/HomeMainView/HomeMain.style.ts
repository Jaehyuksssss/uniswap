import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: calc(100vh - 60px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 8px 0px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    font-size: 32px;
    line-height: 40px;
  }
`;
export const ExchangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px 8px;
  width: 462px;
  height: 324px;
  border-radius: 16px;
  background: 250, 249, 250);
  transition: transform 250ms ease 0s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
`;

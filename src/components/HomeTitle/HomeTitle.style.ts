import styled from 'styled-components';

export const HomeTitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: min(720px, 100%);
  min-height: 680px;
  z-index: 990;
  padding: 0px 0px 40px;
  background-color: transparent;
  transition: opacity 250ms ease 0s;
  pointer-events: none;

  @media (max-width: 768px) {
    max-width: min(720px, 100%);
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 32px;
    line-height: 40px;
  }
`;

export const MainTitle = styled.div`
  background: linear-gradient(
    rgb(255, 248, 250) 0%,
    rgb(255, 248, 250) 10%,
    rgb(254, 246, 249) 20%,
    20%,
    rgb(255, 243, 247) 80%,
    rgb(255, 242, 246) 90%,
    rgb(255 241 246) 100%
  );
  font-size: 64px;
  over-flow: hidden;
  line-height: 72px;
  font-weight: 700;
  text-align: center;
  padding: 32px 0px 32px;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const SubTitle = styled.div`
  margin: 0px 0px 32px;
  font-size: 20px;
  line-height: 28px;
`;

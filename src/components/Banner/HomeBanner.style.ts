import styled from 'styled-components';

export const HomeBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 140px;
  flex-direction: row;
  background: url(/images/banner.png), linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%);
  border-radius: 32px;
  padding: 24px 2.5rem 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 250px;
  }
`;

export const HomeBannerTitle = styled.div`
  span {
    font-size: 28px;
    line-height: 36px;
    color: white;
    font-weight: 700;
    font-family: 'Inter custom', sans-serif;
  }
`;

export const BannerSubtitle = styled.div`
  span {
    margin: 10px 10px 0px 0px;
    font-weight: 500;
    font-size: 16px;
    color: white;
    font-family: 'Inter custom', sans-serif;
  }
`;

export const LearnMoreBtn = styled.button`
  font-size: 16px;
  width: 200px;
  height: 54px;
  color: white;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

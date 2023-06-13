import styled from 'styled-components';
import { theme } from '../../styles';

export const Logo = styled.img`
  width: 27.8px;
  height: 32px;
`;
export const NavIcon = styled.img`
  width: 23px;
  height: 23px;
  margin: 2px;
  &:hover {
    cursor: pointer;
  }
`;
export const ConnectButton = styled.button`
  width: 80px;
  height: 40px;
  margin-left: 12px;
  background: ${theme.LIGHT_PINK};
  border-radius: 20px;
  span {
    color: ${theme.PINK};
    font-size: 18px;
    font-family: 'Inter custom', sans-serif;
  }
`;
export const NavIconWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  gap: 0.5rem;
  @media (max-width: 576px) {
    justify-content: flex-start;
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1670px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 470px;
    margin-right: 100px;
  }
  @media (max-width: 508px) {
    display: flex;
    width: 408px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 12px;
  width: 100%;
  height: 72px;
  z-index: 2;
  align-items: flex-start;
  @media (max-width: 1200px) {
    display: flex;
    width: 1100px;
  }
  @media (max-width: 900px) {
    display: flex;
    width: 750px;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 650px;
  }
  @media (max-width: 508px) {
    display: flex;
    width: 300px;
  }
`;

export const NavItemSpan = styled.span`
  display: flex;
  height: 35px;
  align-items: center;
  font-size: 15px;
  color: #666;
  font-family: 'Inter custom', sans-serif;
  font-weight: 600;
  transition: color 0.3s ease;
  &:hover {
    background-color: #ddd;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    color: #333;
  }
`;

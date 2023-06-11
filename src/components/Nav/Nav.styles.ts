import styled from 'styled-components';
import { theme } from '../../styles';

export const Logo = styled.img`
  width: 27.8px;
  height: 32px;
`;
export const NavIcon = styled.img`
  width: 20px;
  height: 20px;
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
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
  font-size: 14px;
`;

export const NavItemWrapper = styled.div`
  flex-grow: 0.8;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;
  width: 100%;
  height: 72px;
  z-index: 2;
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

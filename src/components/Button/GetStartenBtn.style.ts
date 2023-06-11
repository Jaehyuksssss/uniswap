import styled from 'styled-components';
import { theme } from '../../styles';

export const GetStartButtonContainer = styled.button`
  width: 360px;
  height: 52px;
  margin-left: 12px;
  background: ${theme.HOT_PINK};
  border-radius: 20px;
  margin: 0px 0px 20px;
  pointer-events: auto;
  &:hover {
    cursor: pointer;
    background: ${theme.LIGHT_PINK};
  }
  span {
    color: white;
    font-size: 18px;
    font-family: 'Inter custom', sans-serif;
  }
`;

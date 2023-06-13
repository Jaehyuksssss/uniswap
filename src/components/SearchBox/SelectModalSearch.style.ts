import styled from 'styled-components';
import { theme } from '../../styles';

export const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
  width: 100%;
  max-width: 600px;
  height: 46px;
  border: 1px solid ${theme.GREY_MEDIUM};
  border-radius: 12px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 575px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-family: 'Inter custom', sans-serif;
  font-size: 18px;
  outline: none;
`;
export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SearchIconWrapper = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

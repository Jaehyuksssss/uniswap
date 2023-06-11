import styled from 'styled-components';
import { theme } from '../../styles';

export const SearchBoxWrapper = styled.div`
  display: flex;
  flex-grow: 2;
  width: 100%;
  max-width: 600px;
  height: 46px;
  align-items: center;
  border: 1px solid ${theme.GREY_MEDIUM};
  padding: 0.7rem;
  border-radius: 12px;
  margin-bottom: 10px;
  background-color: rgb(250, 249, 250);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-family: 'Inter custom', sans-serif;
  font-size: 18px;
  outline: none;
`;

export const SearchIconWrapper = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

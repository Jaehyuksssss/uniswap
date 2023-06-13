import styled from 'styled-components';
import theme from '../../../styles/theme';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  position: relative;
  pointer: cursor;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  align-items: center;
  border: 1px solid ${theme.GREY_MEDIUM};
  background-color: white;
`;
export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.4rem;
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
  width: 23px;
  height: 23px;
  margin-right: 4px;
`;

export const DropdownContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-height: 200px;
`;

export const DropdownTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  &:hover {
    cursor: pointer;
    background-color: rgb(245, 246, 252);
  }
`;
export const SearchDropDownWrapper = styled.div`
  z-index: 999;
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 0px 0px 20px 20px;
  height: 400px;
  background-color: white;
  padding: 15px 12px;
`;
export const DropdownTag = styled.div`
  display: flex;
  align-items: center;
  line-height: 24px;
  span {
    font-family: 'Inter custom', sans-serif;
    font-size: 15px;
    font-weight: 500;
  }
`;
export const DropDownTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
  }
  span{
    font-size:15px;
    font-weight:500;
    font-family: 'Inter custom', sans-serif;
    color: rgb(152, 161, 192);
  }
  }
`;

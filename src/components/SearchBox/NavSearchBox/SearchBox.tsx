import { useState, ChangeEvent, useRef } from 'react';
import SearchBarDropDown from './SearchBarDropdown';
import {
  SearchBarContainer,
  SearchBoxWrapper,
  SearchDropDownWrapper,
  SearchIconWrapper,
  SearchInput,
  SearchWrapper,
} from './SearchBox.style';
import useOutsideClick from '../../../hooks/useOutsideClick';

export default function SearchBox() {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const openDropdown = () => {
    setIsInputActive(true);
  };

  const closeDropdown = () => {
    setIsInputActive(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchInputValue(value);
  };

  useOutsideClick(searchBoxRef, closeDropdown);

  return (
    <SearchWrapper>
      <SearchBoxWrapper ref={searchBoxRef}>
        <SearchBarContainer onClick={openDropdown}>
          <SearchIconWrapper alt="Search" src="/images/search.png" />
          <SearchInput type="text" placeholder="Search tokens and NFT collections" onChange={handleInputChange} />
        </SearchBarContainer>
      </SearchBoxWrapper>
      {isInputActive && (
        <SearchDropDownWrapper>
          <SearchBarDropDown searchInputValue={searchInputValue} />
        </SearchDropDownWrapper>
      )}
    </SearchWrapper>
  );
}

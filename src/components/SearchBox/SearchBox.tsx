import { SearchBoxWrapper, SearchIconWrapper, SearchInput } from './SearchBox.style';

export default function SearchBox() {
  return (
    <SearchBoxWrapper>
      <SearchIconWrapper alt="Search" src="/images/search.png" />
      <SearchInput type="text" placeholder="Search tokens and NFT collections" />
    </SearchBoxWrapper>
  );
}

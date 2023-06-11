import { SearchBoxWrapper, SearchIconWrapper, SearchInput } from './SearchBox.style';

export default function SelectModalSearch() {
  return (
    <SearchBoxWrapper>
      <SearchIconWrapper alt="Search" src="/images/search.png" />
      <SearchInput type="text" placeholder="Search names or paste address" />
    </SearchBoxWrapper>
  );
}

import { useGetTokensData } from '../../../hooks/useGetTokensData';
import { DropDownTitle, DropdownContainer, DropdownTag, DropdownTagWrapper } from './SearchBox.style';

export default function SearchBarDropDown({ searchInputValue }: { searchInputValue: string }) {
  const tokensData = useGetTokensData();

  const searched = tokensData.filter((item) => item.name.toLowerCase().includes(searchInputValue.toLowerCase()));

  return (
    <DropdownContainer>
      <DropDownTitle>
        <img src="../images/earn.png" alt="" />
        <span>Search Result</span>
      </DropDownTitle>
      {searched.map((item) => (
        <DropdownTagWrapper key={item.id}>
          <DropdownTag>
            <img src={item.thumbnail} alt="" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{item.name}</span>
              <span>{item.tag}</span>
            </div>
          </DropdownTag>
          <div>
            {item.currency}
            {item.price}
          </div>
        </DropdownTagWrapper>
      ))}
    </DropdownContainer>
  );
}

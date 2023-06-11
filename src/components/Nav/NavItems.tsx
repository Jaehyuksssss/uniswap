import { NAV_ITEMS } from '../../utils/NavConstants';
import { NavItemsParams } from '../../utils/interface';
import { NavIcon, NavItemSpan, NavItemWrapper } from './Nav.styles';

export default function NavItems() {
  return (
    <NavItemWrapper>
      {NAV_ITEMS.map((item: NavItemsParams) => {
        return (
          <div key={item.id}>
            <NavItemSpan>{item.title}</NavItemSpan>
          </div>
        );
      })}
      <NavIcon alt="more" src="/images/more.png" />
    </NavItemWrapper>
  );
}

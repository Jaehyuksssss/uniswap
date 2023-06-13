import { Link } from 'react-router-dom';
import { Logo, NavContainer, NavIcon, NavIconWrapper, NavItemWrapper } from './Nav.styles';
import NavItems from './NavItems';
import ConnectWalletBtn from '../Button/ConnectWalletBtn';
import SearchBox from '../SearchBox/NavSearchBox/SearchBox';

export default function Nav() {
  return (
    <NavContainer>
      <NavItemWrapper>
        <Link to="/">
          <Logo alt="Logo" src="/images/logo.png" />
        </Link>
        <NavItems />
      </NavItemWrapper>
      <SearchBox />
      <NavIconWrapper>
        <NavIcon alt="Logo" src="/images/eth.png" />
        <NavIcon alt="Logo" src="/images/angle.png" />
        <ConnectWalletBtn />
      </NavIconWrapper>
    </NavContainer>
  );
}

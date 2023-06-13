import { Link } from 'react-router-dom';
import { Logo, NavContainer, NavIcon, NavIconWrapper, NavItemWrapper } from './Nav.styles';
import NavItems from './NavItems';
import ConnectWalletBtn from '../Button/ConnectWalletBtn';
import SearchBox from '../SearchBox/NavSearchBox/SearchBox';
import useMediaQuery from '../../hooks/useMediaQuery';
import { SearchIconWrapper } from '../SearchBox/NavSearchBox/SearchBox.style';

export default function Nav() {
  const isResponsive = useMediaQuery('(max-width: 1200px)');

  return (
    <NavContainer>
      <NavItemWrapper>
        <Link to="/">
          <Logo alt="Logo" src="/images/logo.png" />
        </Link>
        <NavItems />
      </NavItemWrapper>
      <div>
        <SearchBox />
      </div>
      <NavIconWrapper>
        {isResponsive ? <SearchIconWrapper alt="Search" src="/images/search.png" /> : null}
        <NavIcon alt="Logo" src="/images/eth.png" />
        <button style={{ width: '25px', height: '25px' }}>
          <NavIcon alt="Logo" src="/images/angle.png" />
        </button>
        <ConnectWalletBtn />
      </NavIconWrapper>
    </NavContainer>
  );
}

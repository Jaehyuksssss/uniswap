import { Link } from 'react-router-dom';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import { HomeTitleContainer } from '../../components/HomeTitle/HomeTitle.style';
import { HomeWrapper, ExchangeWrapper } from './HomeMain.style';
import Exchange from '../../components/Exchange/Exchange';

export default function HomeMain() {
  return (
    <HomeWrapper>
      <ExchangeWrapper as={Link} to="/swap">
        <Exchange />
      </ExchangeWrapper>
      <HomeTitleContainer>
        <HomeTitle />
      </HomeTitleContainer>
    </HomeWrapper>
  );
}

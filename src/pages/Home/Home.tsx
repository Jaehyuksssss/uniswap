import HomeCards from '../../containers/HomeCards/HomeCards';
import HomeMain from '../../containers/HomeMainView/HomeMain';
import { HomeContainer } from './Home.style';

export default function Home() {
  return (
    <HomeContainer>
      <HomeMain />
      <HomeCards />
    </HomeContainer>
  );
}

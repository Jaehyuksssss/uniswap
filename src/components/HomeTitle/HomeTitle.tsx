import { Link } from 'react-router-dom';
import GetStaterBtn from '../Button/GetStarterBtn';
import LearnMoreBtn from '../Button/LearnMoreBtn';
import { HomeTitleContainer, MainTitle, SubTitle } from './HomeTitle.style';

export default function HomeTitle() {
  return (
    <HomeTitleContainer>
      <MainTitle>Trade crypto and NFTs with confidence</MainTitle>
      <SubTitle>Buy, sell, and explore tokens and NFTs</SubTitle>
      <Link to="/swap">
        <GetStaterBtn />
      </Link>
      <LearnMoreBtn />
    </HomeTitleContainer>
  );
}

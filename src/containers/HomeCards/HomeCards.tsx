import HomeBanner from '../../components/Banner/HomeBanner';
import HomeCard from '../../components/Card/HomeCard';
import MiniCard from '../../components/Card/MiniCard';
import { useGetCardsData } from '../../hooks/useGetCardsData';
import { useGetMiniCardsData } from '../../hooks/useGetMiniCardsData';
import { CardParams, MiniCardParams } from '../../utils/interface';
import { CardContainer, HomeCardsWrapper, MiniCardContainer } from './HomeCards.style';

export default function HomeCards() {
  const cardsData = useGetCardsData();
  const miniCardsData = useGetMiniCardsData();

  return (
    <HomeCardsWrapper>
      <CardContainer>
        {cardsData.map((item: CardParams) => {
          return (
            <HomeCard
              key={item.id}
              id={item.id}
              name={item.name}
              desc={item.desc}
              thumbnail={item.thumbnail}
              tag={item.tag}
            />
          );
        })}
      </CardContainer>
      <MiniCardContainer>
        {miniCardsData.map((item: MiniCardParams) => {
          return <MiniCard key={item.id} id={item.id} name={item.name} desc={item.desc} tag={item.tag} />;
        })}
      </MiniCardContainer>
      <HomeBanner />
    </HomeCardsWrapper>
  );
}

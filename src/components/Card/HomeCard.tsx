import { CardParams } from '../../utils/interface';
import { AddMoreBtn, CardContainer, CardContents, CardDesc, CardHeader } from './HomeCard.style';

export default function HomeCard({ id, name, desc, thumbnail, tag }: CardParams) {
  return (
    <CardContainer thumbnail={thumbnail}>
      <CardContents>
        <CardHeader>
          <span>{name}</span>
        </CardHeader>
        <CardDesc>
          {desc} <AddMoreBtn>{tag}</AddMoreBtn>
        </CardDesc>
      </CardContents>
    </CardContainer>
  );
}

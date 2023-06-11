import { MiniCardParams } from '../../utils/interface';
import { MiniAddMoreBtn, MiniCardContainer, MiniCardContents, MiniCardDesc, MiniCardHeader } from './MiniCard.style';

export default function MiniCard({ id, name, desc, tag }: MiniCardParams) {
  return (
    <MiniCardContainer>
      <MiniCardContents>
        <MiniCardHeader>
          <span> {name}</span>
        </MiniCardHeader>
        <MiniCardDesc>
          {desc} <MiniAddMoreBtn>{tag}</MiniAddMoreBtn>
        </MiniCardDesc>
      </MiniCardContents>
    </MiniCardContainer>
  );
}

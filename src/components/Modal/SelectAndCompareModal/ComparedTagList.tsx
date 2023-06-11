import { useRecoilState } from 'recoil';
import { tokenItemParams, tokensParams } from '../../../utils/interface';
import { comparedTag, swapSelectedState } from '../../../atom/SelectModal/ExchangeAtoms';
import { TagContainer } from '../SelectModal/SelectModal.style';

export default function SelectedModal({ id, name, thumbnail, price, currency, tag }: tokensParams) {
  const [selectModalTag, setSelectModalTag] = useRecoilState(comparedTag);
  const [swapModalState, setSwapModalState] = useRecoilState<Partial<tokenItemParams>>(swapSelectedState);
  const closeSelectModal = () => {
    setSwapModalState((prevModalTag) => ({
      ...prevModalTag,
      isVisible: false,
    }));
  };

  const handleClick = () => {
    setSelectModalTag({
      id,
      name,
      thumbnail,
      price,
      currency,
      tag,
    });
    closeSelectModal();
  };
  return (
    <TagContainer onClick={handleClick}>
      <img src={thumbnail} alt="tag" />
      {name}
    </TagContainer>
  );
}

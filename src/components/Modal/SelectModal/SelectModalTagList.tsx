import { useRecoilState } from 'recoil';
import { calculateState, swapState } from '../../../atom/SelectModal/ExchangeAtoms';
import { selectModal } from '../../../atom/SelectModal/SelectModalAtoms';
import { tokensParams, tokenItemParams } from '../../../utils/interface';
import { TagContainer } from './SelectModal.style';

export default function SelectModalTagList({ id, name, thumbnail, price, currency, tag }: tokensParams) {
  const [selectModalTag, setSelectModalTag] = useRecoilState<Partial<tokenItemParams>>(selectModal);
  const [exchangeState, setExchangeState] = useRecoilState(calculateState);
  const closeSelectModal = () => {
    setSelectModalTag((prevModalTag) => ({
      ...prevModalTag,
      isVisible: false,
    }));
  };

  const handleClick = () => {
    setExchangeState({
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

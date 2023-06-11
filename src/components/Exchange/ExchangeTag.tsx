import { useRecoilState } from 'recoil';
import { useGetTokensData } from '../../hooks/useGetTokensData';
import { tokenItemParams, tokensParams } from '../../utils/interface';
import { TagButton, TagContainer } from './ExchangeTag.style';
import { calculateState, swapState } from '../../atom/SelectModal/ExchangeAtoms';
import { selectModal } from '../../atom/SelectModal/SelectModalAtoms';

export default function ExchangeTag() {
  const [selectModalState, setSelectModalState] = useRecoilState<Partial<tokenItemParams>>(selectModal);
  const [exchangeState, setExchangeState] = useRecoilState(calculateState);

  const tokensData = useGetTokensData();

  const modalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectModalState({
      ...selectModalState,
      isVisible: true,
    });
  };

  const buttonText = exchangeState?.name || tokensData[0]?.name || '';
  const buttonImg = exchangeState?.thumbnail || tokensData[0]?.thumbnail || '';

  return (
    <TagContainer>
      <TagButton onClick={modalHandler}>
        <img src={buttonImg} alt="" />
        {buttonText}
      </TagButton>
    </TagContainer>
  );
}

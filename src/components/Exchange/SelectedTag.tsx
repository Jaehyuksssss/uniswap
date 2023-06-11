import { useRecoilState } from 'recoil';
import { useGetTokensData } from '../../hooks/useGetTokensData';
import { tokenItemParams } from '../../utils/interface';
import { TagButton, TagContainer } from './ExchangeTag.style';
import { comparedTag, swapSelectedState } from '../../atom/SelectModal/ExchangeAtoms';

export default function SelectedTag() {
  const [selectModalState, setSelectModalState] = useRecoilState<Partial<tokenItemParams>>(swapSelectedState);
  const [exchangeState] = useRecoilState(comparedTag);
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

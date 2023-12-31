import { useRecoilState } from 'recoil';
import { swapSelectedState, comparedTag } from '../../atom/SelectModal/ExchangeAtoms';
import { useGetTokensData } from '../../hooks/useGetTokensData';
import { tokenItemParams } from '../../utils/interface';
import { TagContainer, TagButton } from './Exchange.style';

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

  const buttonText = exchangeState?.tag || tokensData[0]?.tag || '';
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

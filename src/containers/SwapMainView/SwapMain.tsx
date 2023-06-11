import { useRecoilState } from 'recoil';
import { selectModal } from '../../atom/SelectModal/SelectModalAtoms';
import Exchange from '../../components/Exchange/Exchange';
import { tokenItemParams } from '../../utils/interface';
import { SwapWrapper } from './SwapMain.style';
import { swapSelectedState } from '../../atom/SelectModal/ExchangeAtoms';
import { SelectModal } from '../../components/Modal/SelectModal/SelectModal';
import { ComparedModal } from '../../components/Modal/SelectAndCompareModal/ComparedModal';

export default function SwapMain() {
  const [selectModalState, setSelectModalState] = useRecoilState<Partial<tokenItemParams>>(selectModal);
  const [comparedModal, setComparedModal] = useRecoilState<Partial<tokenItemParams>>(swapSelectedState);
  const closeSelectModal = () => {
    setSelectModalState({
      isVisible: false,
    });
  };
  const closeComparedModal = () => {
    setComparedModal({
      isVisible: false,
    });
  };

  return (
    <SwapWrapper>
      <Exchange />
      {selectModalState.isVisible && <SelectModal onClose={closeSelectModal} />}
      {comparedModal.isVisible && <ComparedModal onClose={closeComparedModal} />}
    </SwapWrapper>
  );
}

import { atom } from 'recoil';
import { tokenItemParams } from '../../utils/interface';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const selectModal = atom<Partial<tokenItemParams>>({
  key: 'tokensItemModal',
  default: {
    isVisible: false,
  },
  effects_UNSTABLE: [persistAtom],
});

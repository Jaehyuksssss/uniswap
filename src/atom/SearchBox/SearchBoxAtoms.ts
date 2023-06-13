import { atom } from 'recoil';
import { tokenItemParams } from '../../utils/interface';

export const searchboxState = atom<tokenItemParams>({
  key: 'searchbox',
  default: {
    isVisible: false,
    id: 0,
    name: '',
    price: 0,
    currency: '',
    thumbnail: '',
    tag: '',
  },
});

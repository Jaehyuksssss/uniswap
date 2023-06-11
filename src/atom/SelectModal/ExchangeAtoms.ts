import { atom } from 'recoil';
import { tokenItemParams, tokensParams } from '../../utils/interface';

export const swapState = atom<Partial<tokenItemParams>>({
  key: 'swap',
  default: {
    isVisible: false,
  },
});

export const swapSelectedState = atom<Partial<tokenItemParams>>({
  key: 'swapSelected',
  default: {
    isVisible: false,
  },
});

export const calculateState = atom<tokensParams>({
  key: 'calculate',
  default: {
    id: 0,
    name: '',
    price: 0,
    currency: '',
    thumbnail: '',
    tag: '',
  },
});

export const comparedTag = atom<tokensParams>({
  key: 'compared',
  default: {
    id: 0,
    name: '',
    price: 0,
    currency: '',
    thumbnail: '',
    tag: '',
  },
});

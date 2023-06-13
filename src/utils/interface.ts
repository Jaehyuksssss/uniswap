type tagType = 'Swap' | 'Tokens' | 'NFTs' | 'Pools';

export interface ListParams {
  title: string;
  link: string;
}

export interface NavItemsParams {
  id: number;
  tag: tagType;
  title: string;
  path: string;
}

export interface INavMenuProps {
  data: NavItemsParams;
}

export interface CardParams {
  id: number;
  name: string;
  desc: string;
  thumbnail: string;
  tag: string;
}

export interface CardData {
  card: CardParams[];
  name: any;
}
export interface CardContainerProps {
  thumbnail: string;
}

export interface MiniCardParams {
  id: number;
  name: string;
  desc: string;
  tag: string;
}

export interface ListParams {
  title: string;
  link: string;
}

export interface FooterItemParams {
  id: number;
  tag: tagType;
  title: string;
  path: string;
}

export interface INavMenuProps {
  data: NavItemsParams;
}

export interface tokensData {
  tokens: tokensParams[];
}

export interface tokensParams {
  id: number;
  name: string;
  price: number;
  currency: string;
  thumbnail: string;
  tag: string;
}

export interface tokenItemParams extends tokensParams {
  isVisible: boolean;
}

export interface selectModalProps {
  onClose: () => void;
}
export interface DropDownCardProps {
  item: tokenItemParams;
  value: '';
}
export interface DropdownCardProps extends DropDownCardProps {
  searched: string[];
}

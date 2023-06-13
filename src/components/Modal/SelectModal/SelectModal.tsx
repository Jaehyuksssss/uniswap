import { useGetTokensData } from '../../../hooks/useGetTokensData';
import { selectModalProps, tokensParams } from '../../../utils/interface';
import {
  ModalCell,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ModalWrapper,
  TagWrapper,
} from './SelectModal.style';
import SelectModalTagList from './SelectModalTagList';

export const SelectModal: React.FC<selectModalProps> = ({ onClose }) => {
  const tokensData = useGetTokensData();
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>
            <span>Select a token</span>
            <div onClick={onClose}>x</div>
          </ModalTitle>
          <div>
            <TagWrapper>
              {tokensData.map((item: tokensParams) => {
                return (
                  <SelectModalTagList
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    currency={item.currency}
                    thumbnail={item.thumbnail}
                    name={item.name}
                    tag={item.tag}
                  />
                );
              })}
            </TagWrapper>
          </div>
        </ModalHeader>
        <ModalContent>
          <TagWrapper>
            {tokensData.map((item: tokensParams) => {
              return (
                <SelectModalTagList
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  currency={item.currency}
                  thumbnail={item.thumbnail}
                  name={item.name}
                  tag={item.tag}
                />
              );
            })}
          </TagWrapper>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

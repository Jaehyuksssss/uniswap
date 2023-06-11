import { useGetTokensData } from '../../../hooks/useGetTokensData';
import { selectModalProps, tokensParams } from '../../../utils/interface';
import {
  ModalOverlay,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  TagWrapper,
  ModalContent,
  ModalCell,
} from '../SelectModal/SelectModal.style';
import ComparedTagList from './ComparedTagList';

export const ComparedModal: React.FC<selectModalProps> = ({ onClose }) => {
  const tokensData = useGetTokensData();
  console.log(tokensData);
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
                  <ComparedTagList
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
                <ComparedTagList
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
          <ModalCell>list1</ModalCell>
          <ModalCell>list2</ModalCell>
          <ModalCell>list3</ModalCell>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

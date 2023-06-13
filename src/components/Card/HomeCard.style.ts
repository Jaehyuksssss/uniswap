import styled from 'styled-components';
import { theme } from '../../styles';

export const CardContainer = styled.div<{ thumbnail: string }>`
  display: flex;
  width: 704px;
  height: 306px;
  border-radius: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.GREY_MEDIUM};
  padding: 32px 0px 32px 32px;
  &:hover {
    border: 0.5px solid ${theme.GREY_DARK};
  }

  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  background-position: center;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  @media (max-width: 900px) {
    display: flex;
  }
  @media (max-width: 768px) {
    width:100%
    display: flex;
    flex-direction: column;
  }
};`;

export const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  font-size: 28px;
  line-height: 36px;

  @media (max-width: 768px) {
  }
`;

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 28px;
  max-width: 480px;

  @media (max-width: 768px) {
  }
`;

export const AddMoreBtn = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  margin: 24px 0px 0px;
  color: ${theme.PINK};

  @media (max-width: 768px) {
  }
`;

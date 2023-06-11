import styled from 'styled-components';
import { theme } from '../../styles';

export const MiniCardContainer = styled.div`
  display: flex;
  width: 460px;
  height: 260px;
  background: rgb(245, 246, 252);
  border-radius: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.GREY_MEDIUM};
  padding: 32px;
  gap: 32px;
  &:hover {
    border: 0.5px solid ${theme.GREY_DARK};
  }
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    width: 100%;
    max-width: 480px;
  }
`;
export const MiniCardContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0px 0px;
`;
export const MiniCardHeader = styled.div`
  font-size: 28px;
  line-height: 36px;
`;
export const MiniCardDesc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 28px;
  max-width: 480px;
`;
export const MiniAddMoreBtn = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  margin: 24px 0px 0px;
  color: ${theme.PINK};
`;

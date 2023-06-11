import styled from 'styled-components';

export const HomeCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 96px 5rem;
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 480px;
  }
`;

export const MiniCardContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @me @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

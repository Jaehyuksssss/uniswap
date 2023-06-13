import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #ffffff 0%, #ffd1e0 100%);

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 1200px;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 900px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 768px;
  }
  @media (max-width: 508px) {
    display: flex;
    flex-direction: column;
    width: 508px;
  }
`;

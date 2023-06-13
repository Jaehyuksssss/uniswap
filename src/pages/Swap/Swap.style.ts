import styled from 'styled-components';

export const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 450px;
    align-items: center;
  }
`;

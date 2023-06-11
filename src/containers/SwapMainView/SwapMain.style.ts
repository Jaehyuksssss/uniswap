import styled from 'styled-components';

export const SwapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 68px 8px 0px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

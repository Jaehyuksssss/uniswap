import styled from 'styled-components';

export const SwapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 68px 8px 0px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 450px;
    align-items: center;
  }

  @media (max-width: 576px) {
    width: 450px;
  }
`;

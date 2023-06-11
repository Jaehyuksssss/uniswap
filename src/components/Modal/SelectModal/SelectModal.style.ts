import styled from 'styled-components';
import theme from '../../../styles/theme';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 680px;
  border-radius: 20px;
  background: white;
`;

export const ModalHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${theme.GREY};
  span {
    font-family: 'Inter custom', sans-serif;
    font-size: 18px;
    font-weight: bold;
  }
`;
export const ModalTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 3px;
  div {
    font-size: 24px;
    padding: 4px;
    cursor: pointer;
  }
`;
export const ModalContent = styled.div`
  padding: 16px;
  margin-bottom: 10px;
`;

export const ModalCell = styled.div`
  padding: 8px 0;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 84px;
  height: 40px;
  border: 1px solid rgb(210, 217, 238);
  border-radius: 16px;
  padding: 6px 12px 6px 6px;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 16px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

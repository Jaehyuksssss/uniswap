import styled from 'styled-components';

export const LearnMoreBtnContainer = styled.button`
  display: flex;
  width: 360px;
  height: 52px;
  margin-left: 12px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  span {
    color: rgb(152, 161, 192);
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Inter custom', sans-serif;
    transition: background 0.3s ease;
    position: relative;
    z-index: 2;
  }
`;

export const MoreInfoButton = styled.img``;

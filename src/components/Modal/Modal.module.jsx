import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(71, 71, 201);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  overflow: hidden;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Img = styled.img``
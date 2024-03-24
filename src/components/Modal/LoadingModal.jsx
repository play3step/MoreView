import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { LodingState } from '../../store/recoil';

function LoadingModal() {
  const lodingValue = useRecoilValue(LodingState);
  if (!lodingValue) {
    return null;
  }
  return (
    <ModalBackdrop>
      <Spinner />
    </ModalBackdrop>
  );
}

export default LoadingModal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

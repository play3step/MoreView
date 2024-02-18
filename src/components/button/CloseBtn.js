import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/close.svg';

function CloseBtn({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <Close alt="Close" width="1.975vw" height="5.555vh" />
    </CloseButton>
  );
}
export default CloseBtn;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
`;

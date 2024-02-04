import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/close.svg';

function CloseBtn({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <Close alt="Close" />
    </CloseButton>
  );
}
export default CloseBtn;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
`;

import styled from 'styled-components';
import Close from '../../assets/close.png';

function CloseBtn({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <CloseImage src={Close} alt="Close" />
    </CloseButton>
  );
}
export default CloseBtn;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
`;

const CloseImage = styled.img`
  width: 1.6;
  height: 10.88vh;
`;

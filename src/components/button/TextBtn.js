import styled from 'styled-components';
import { ReactComponent as Text } from '../../assets/text.svg';

function TextBtn({ onClick }) {
  return (
    <TextButton onClick={onClick}>
      <Text alt="Text" />
    </TextButton>
  );
}
export default TextBtn;

const TextButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.2vw;
`;

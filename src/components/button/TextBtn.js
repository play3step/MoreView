import styled from 'styled-components';
import Text from '../../assets/text.png';

function TextBtn({ onClick }) {
  return (
    <TextButton onClick={onClick}>
      <TextImage src={Text} alt="Text" />
    </TextButton>
  );
}
export default TextBtn;

const TextButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.2vw;
`;

const TextImage = styled.img`
  width: 5.625vw;
  height: 8vh;
`;

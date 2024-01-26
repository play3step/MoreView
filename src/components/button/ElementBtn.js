import styled from 'styled-components';
import Element from '../../assets/element.png';

function ElementBtn({ onClick }) {
  return (
    <ElementButton onClick={onClick}>
      <ElementImage src={Element} alt="Element" />
    </ElementButton>
  );
}
export default ElementBtn;

const ElementButton = styled.button`
  background-color: transparent;
  border: none;
`;

const ElementImage = styled.img`
  width: 5.625vw;
  height: 8vh;
`;

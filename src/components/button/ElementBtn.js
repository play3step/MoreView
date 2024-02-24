import styled from 'styled-components';
import { ReactComponent as Element } from '../../assets/interactive/element.svg';

function ElementBtn({ onClick }) {
  return (
    <ElementButton onClick={onClick}>
      <Element alt="Element" width="4.21875vw" height="7.5vh" />
    </ElementButton>
  );
}
export default ElementBtn;

const ElementButton = styled.button`
  background-color: transparent;
  border: none;
`;

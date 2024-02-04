import styled from 'styled-components';
import { ReactComponent as Element } from '../../assets/element.svg';

function ElementBtn({ onClick }) {
  return (
    <ElementButton onClick={onClick}>
      <Element alt="Element" />
    </ElementButton>
  );
}
export default ElementBtn;

const ElementButton = styled.button`
  background-color: transparent;
  border: none;
`;

import styled from 'styled-components';
import { ReactComponent as Redo } from '../../assets/redo.svg';

function RedoBtn() {
  return (
    <RedoButton>
      <Redo alt="Redo" />
    </RedoButton>
  );
}
export default RedoBtn;

const RedoButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.2vw;
`;

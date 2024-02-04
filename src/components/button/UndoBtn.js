import styled from 'styled-components';
import { ReactComponent as Undo } from '../../assets/undo.svg';

function UndoBtn() {
  return (
    <UndoButton>
      <Undo alt="Undo" />
    </UndoButton>
  );
}
export default UndoBtn;

const UndoButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.2vw;
`;

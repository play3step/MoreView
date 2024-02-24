import styled from 'styled-components';
import { ReactComponent as Undo } from '../../assets/icon/undo.svg';

function UndoBtn() {
  return (
    <UndoButton>
      <Undo alt="Undo" width="1.822vw" height="3.7962vh" />
    </UndoButton>
  );
}
export default UndoBtn;

const UndoButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.2vw;
`;

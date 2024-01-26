import styled from 'styled-components';
import Undo from '../../assets/undo.png';

function UndoBtn() {
  return (
    <UndoButton>
      <UndoImage src={Undo} alt="Undo" />
    </UndoButton>
  );
}
export default UndoBtn;

const UndoButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.2vw;
`;

const UndoImage = styled.img`
  width: 2.4vw;
  height: 4.88vh;
`;

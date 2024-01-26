import styled from 'styled-components';
import Redo from '../../assets/redo.png';

function RedoBtn() {
  return (
    <RedoButton>
      <RedoImage src={Redo} alt="Redo" />
    </RedoButton>
  );
}
export default RedoBtn;

const RedoButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.2vw;
`;

const RedoImage = styled.img`
  width: 2.4vw;
  height: 4.88vh;
`;

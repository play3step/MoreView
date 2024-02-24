import styled from 'styled-components';
import { ReactComponent as Redo } from '../../assets/icon/redo.svg';

function RedoBtn() {
  return (
    <RedoButton>
      <Redo alt="Redo" width="1.822vw" height="3.7962vh" />
    </RedoButton>
  );
}
export default RedoBtn;

const RedoButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.2vw;
`;

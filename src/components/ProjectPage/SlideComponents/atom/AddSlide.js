import styled from 'styled-components';
import { ReactComponent as Add } from '../../../../assets/icon/add.svg';

function AddSlide({ onClick }) {
  return (
    <AddSlideBox onClick={onClick}>
      <Add />
    </AddSlideBox>
  );
}

export default AddSlide;

const AddSlideBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.958vw;
  height: 16.11vh;
  border: 1px dashed;
  border-radius: 25px;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;

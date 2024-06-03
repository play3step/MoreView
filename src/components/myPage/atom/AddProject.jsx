import styled from 'styled-components';
import { ReactComponent as Add } from '../../../assets/myPage/add.svg';

function AddProject() {
  return (
    <AddContainer>
      <AddBtn>
        <Add width="5.208333333333334vw" height="9.25925925925926vh" />
      </AddBtn>
      <AddText>New Project</AddText>
    </AddContainer>
  );
}

export default AddProject;

const AddContainer = styled.div`
  width: 20.833333333333336vw;
  height: 31.48148148148148vh;
  padding: 2.5925925925925926vh 1.5625vw;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  margin-top: 2.7777777777777777vh;
`;

const AddBtn = styled.button`
  width: 17.708333333333336vw;
  height: 19.25925925925926vh;
  background-color: #e2eef8;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const AddText = styled.p`
  font-size: 1.14vw;
  color: #4d7df3;
  margin: 0.8vw 0 0 0.3vw;
`;

import styled from 'styled-components';

function CreateProjectBtn({ onClick }) {
  return (
    <CreateBtn type="button" onClick={onClick}>
      Create new
    </CreateBtn>
  );
}

export default CreateProjectBtn;

const CreateBtn = styled.button`
  width: 6.25vw;
  height: 3.98vh;
  background-color: #3182f6;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
`;

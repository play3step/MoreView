import styled from 'styled-components';

function SubmitBtn({ onClick }) {
  return <SubmitButton onClick={onClick}>프로젝트 생성</SubmitButton>;
}

export default SubmitBtn;

const SubmitButton = styled.button`
  width: 5.46875vw;
  height: 3.148148148148148vh;
  background-color: #3182f6;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 0.8vw;
`;

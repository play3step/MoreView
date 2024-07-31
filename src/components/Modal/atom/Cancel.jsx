import styled from 'styled-components';

function Cancel({ onClick }) {
  return <CancelButton onClick={onClick}>취소</CancelButton>;
}

export default Cancel;

const CancelButton = styled.button`
  width: 5.46875vw;
  height: 3.148148148148148vh;
  background-color: white;
  border: 1px solid #a6a9f1;
  border-radius: 4px;
  color: #a6a9f1;
  font-size: 0.8vw;
`;

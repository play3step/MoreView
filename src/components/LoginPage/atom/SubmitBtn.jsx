import styled from 'styled-components';

function SubmitBtn({ type, onClick }) {
  return (
    <SubmitButton type={type} onClick={onClick}>
      로그인
    </SubmitButton>
  );
}

export default SubmitBtn;

const SubmitButton = styled.button`
  width: 308px;
  height: 48px;
  background-color: #3182f6;
  border: none;
  border-radius: 8px;
  margin-top: 8px;
  color: white;
  &:hover {
    background-color: #1b64da;
  }
`;

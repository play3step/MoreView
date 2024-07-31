import styled from 'styled-components';

function LogoutBtn() {
  return <LogoutButton>로그아웃</LogoutButton>;
}

export default LogoutBtn;

const LogoutButton = styled.button`
  width: 6.25vw;
  height: 3.703vh;
  border-radius: 8px;
  background-color: #3182f6;
  color: white;
  border: none;
`;

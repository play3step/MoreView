import styled from 'styled-components';
import UserIcon from './atom/UserIcon';

function UserList() {
  return (
    <UserContainer>
      <UserProfile />
      <UserInfo>
        <UserName>Name 1</UserName>
        <UserEmail>email@naver.com</UserEmail>
      </UserInfo>
      <UserIcon type="Message" />
      <UserIcon type="Trash" />
    </UserContainer>
  );
}

export default UserList;

const UserContainer = styled.div`
  width: 13.489583333333332vw;
  height: 3.888888888888889vh;
  display: flex;
  align-items: center;
`;
const UserProfile = styled.div`
  width: 2.1875vw;
  height: 3.888888888888889vh;
  background-color: #d9d9d9;
  border-radius: 50%;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.55vw;
  margin-right: 1vw;
`;

const UserName = styled.p`
  font-size: 0.8vw;
`;

const UserEmail = styled.p`
  font-size: 0.67vw;
`;

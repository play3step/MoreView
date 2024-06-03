import styled from 'styled-components';
import UserList from './UserList';

function FriendBox() {
  return (
    <BoxContainer>
      <BoxTitle>My Friends</BoxTitle>
      <StyledUserList>
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
      </StyledUserList>
    </BoxContainer>
  );
}

export default FriendBox;

const BoxContainer = styled.div`
  width: 41.66666666666667vw;
  height: 37.03703703703704vh;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  margin-left: 6.25vw;
  padding: 2.9629629629629632vh 5.052083333333333vw;
`;

const BoxTitle = styled.p`
  color: #4d7df3;
  font-size: 1.4vw;
  margin-bottom: 3.074074074074074vh;
`;

const StyledUserList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.2222222222222223vh 4.583333333333333vw;
`;

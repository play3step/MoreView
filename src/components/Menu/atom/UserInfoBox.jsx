import styled from 'styled-components';

function UserInfoBox({ userData }) {
  return (
    <Container>
      <UserProfile />
      <RightBox>
        <UserName>박철현</UserName>
        <UserEmail>{userData?.email}</UserEmail>
      </RightBox>
    </Container>
  );
}

export default UserInfoBox;

const Container = styled.div`
  width: 9.892vw;
  height: 3.518vh;
  display: flex;
  align-items: center;
`;

const UserProfile = styled.div`
  width: 1.979vw;
  height: 1.979vw;
  border-radius: 25px;
  background-color: gray;
  margin-right: 1.25vw;
  flex-shrink: 0;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
`;
const UserName = styled.p``;
const UserEmail = styled.p``;

import styled from 'styled-components';
import InviteBtn from './InviteBtn';

function ShareFriendItem() {
  return (
    <Container>
      <UserInfo>
        <UserProfile />
        <RightBox>
          <UserName>박철현</UserName>
          <UserEmail>play3step@naver.com</UserEmail>
        </RightBox>
      </UserInfo>
      <InviteBtn />
    </Container>
  );
}

export default ShareFriendItem;

const Container = styled.div`
  border: 1px solid #a2a3b6;
  border-radius: 8px;
  padding: 0.625vw;
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  width: 9.583333333333334vw;
  height: 3.148148148148148vh;
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
  gap: 0.14vw;
`;
const UserName = styled.p`
  font-size: 0.7;
`;
const UserEmail = styled.p`
  font-size: 0.625vw;
`;

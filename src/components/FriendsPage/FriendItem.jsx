import styled from 'styled-components';
import UserInfoBox from '../Menu/atom/UserInfoBox';
import FriendBtn from './atom/FriendBtn';

function FriendBox({ data, type, accept, reject }) {
  return (
    <FriendContainer>
      <UserInfoBox name={data?.friendName} email={data?.friendEmail} />
      {type ? (
        <ButtonPosition>
          <FriendBtn text="Accept" onClick={() => accept(data.friendEmail)} />
          <FriendBtn text="Decline" onClick={() => reject(data.friendEmail)} />
        </ButtonPosition>
      ) : null}
    </FriendContainer>
  );
}

export default FriendBox;

const FriendContainer = styled.div`
  width: 100%;
  height: 8.518518518518519vh;
  background-color: #f4f4f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 1vw;
  justify-content: space-between; /* 요소를 양 끝으로 배치 */
`;

const ButtonPosition = styled.div`
  display: flex;
  gap: 1vw;
`;

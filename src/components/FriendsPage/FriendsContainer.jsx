import styled from 'styled-components';
import FriendBox from './FriendItem';

function FriendsContainer() {
  return (
    <RequestContainer>
      <p>Friends</p>
      <FriendBox />
      <FriendBox />
      <FriendBox />
    </RequestContainer>
  );
}

export default FriendsContainer;

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.22vh;
`;

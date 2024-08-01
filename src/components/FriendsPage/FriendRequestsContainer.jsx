import styled from 'styled-components';
import FriendBox from './FriendItem';

function FriendRequestsContainer() {
  return (
    <RequestContainer>
      <p>Friend Requests</p>
      <FriendBox type="Request" />
      <FriendBox type="Request" />
    </RequestContainer>
  );
}

export default FriendRequestsContainer;

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.22vh;
`;

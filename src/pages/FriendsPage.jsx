import styled from 'styled-components';
import FriendRequestsContainer from '../components/FriendsPage/FriendRequestsContainer';
import FriendsContainer from '../components/FriendsPage/FriendsContainer';

function FriendsPage() {
  return (
    <PageContainer>
      <FriendRequestsContainer />
      <FriendsContainer />
    </PageContainer>
  );
}

export default FriendsPage;

const PageContainer = styled.div`
  padding: 12.592vh 10.625vw 11.29vh 6.458vw;
  display: flex;
  flex-direction: column;
  gap: 4.07vh;
`;

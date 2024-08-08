import styled from 'styled-components';
import { useEffect, useState } from 'react';
import FriendRequestsContainer from '../components/FriendsPage/FriendRequestsContainer';
import FriendsContainer from '../components/FriendsPage/FriendsContainer';
import { requestedFriend } from '../apis/User/FriendController';

function FriendsPage() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const setFriends = async () => {
      try {
        const data = await requestedFriend(1);
        setRequests(data);
      } catch (error) {
        console.error(error);
      }
    };
    setFriends();
  }, []);
  console.log(requests);
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

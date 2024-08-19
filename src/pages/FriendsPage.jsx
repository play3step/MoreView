import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import FriendRequestsContainer from '../components/FriendsPage/FriendRequestsContainer';
import FriendsContainer from '../components/FriendsPage/FriendsContainer';
import { getFriends, requestedFriend } from '../apis/User/FriendController';
import { userInfo } from '../store/userState';
import { InviteModalState } from '../store/modalState';

function FriendsPage() {
  const [friendList, setFriendList] = useState([]);
  const [requests, setRequests] = useState([]);
  const setInviteModal = useSetRecoilState(InviteModalState);
  const userData = useRecoilValue(userInfo);
  useEffect(() => {
    const setFriends = async () => {
      try {
        const friendsData = await getFriends(userData.memberId);
        const requestsData = await requestedFriend(userData.memberId);
        setFriendList(friendsData);
        setRequests(requestsData);
      } catch (error) {
        console.error(error);
      }
    };
    setFriends();
  }, []);

  return (
    <PageContainer>
      <div>
        <button type="button" onClick={() => setInviteModal(true)}>
          Add Friend
        </button>
      </div>
      <FriendRequestsContainer requests={requests} />
      <FriendsContainer friendList={friendList} />
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

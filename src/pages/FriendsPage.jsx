import styled from 'styled-components';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import FriendRequestsContainer from '../components/FriendsPage/FriendRequestsContainer';
import FriendsContainer from '../components/FriendsPage/FriendsContainer';
import {
  acceptFriend,
  getFriends,
  rejectFriend,
  requestedFriend,
} from '../apis/User/FriendController';
import { friendList, requestsList, userInfo } from '../store/userState';
import { InviteModalState } from '../store/modalState';

function FriendsPage() {
  const [friendData, setFriendData] = useRecoilState(friendList);
  const [requests, setRequests] = useRecoilState(requestsList);
  const setInviteModal = useSetRecoilState(InviteModalState);
  const userData = useRecoilValue(userInfo);

  const setFriends = async () => {
    try {
      const friendsData = await getFriends(userData.memberId);
      const requestsData = await requestedFriend(userData.memberId);

      setFriendData(friendsData);
      setRequests(requestsData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setFriends();
  }, [userData.memberId, setFriendData, setRequests]);
  const accept = async (friendEmail) => {
    try {
      await acceptFriend(userData.memberId, friendEmail);

      // 친구 리스트에 새로운 친구 추가 하려고 햇는데 req 가 없음
      setFriends();

      // 요청 리스트에서 해당 친구 제거
      setRequests((prevData) =>
        prevData.filter((req) => req.friendEmail !== friendEmail),
      );
    } catch (error) {
      console.error('Failed to accept friend request:', error);
    }
  };

  const reject = async (friendEmail) => {
    try {
      await rejectFriend(userData.memberId, friendEmail);

      // 요청 리스트에서 해당 친구 제거
      setRequests((prevData) =>
        prevData.filter((req) => req.friendEmail !== friendEmail),
      );
    } catch (error) {
      console.error('Failed to reject friend request:', error);
    }
  };
  return (
    <PageContainer>
      <div>
        <AddFriend type="button" onClick={() => setInviteModal(true)}>
          Add Friend
        </AddFriend>
      </div>
      <FriendRequestsContainer
        requests={requests}
        accept={accept}
        reject={reject}
      />
      <FriendsContainer friendList={friendData} />
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

const AddFriend = styled.button`
  width: 5.9375vw;
  height: 3.888vh;
  border-radius: 8px;
  background-color: black;
  color: white;
`;

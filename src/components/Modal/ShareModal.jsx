import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import CancelBtn from './atom/CancelBtn';
import { ShareModalState } from '../../store/modalState';
import ShareFriendItem from './atom/ShareFriendItem';
import InviteBtn from './atom/InviteBtn';
import { friendList, userInfo } from '../../store/userState';
import { ProjectInfo } from '../../store/projectState';
import { inviteProject } from '../../apis/Project/ProjectController';
import { getFriends } from '../../apis/User/FriendController';

function ShareModal() {
  const [modalValue, setModalValue] = useRecoilState(ShareModalState);
  const [friendData, setFriendData] = useRecoilState(friendList);
  const code = useRecoilValue(ProjectInfo);
  const userData = useRecoilValue(userInfo);

  const CancelHandler = () => {
    setModalValue(false);
  };

  useEffect(() => {
    const setFriends = async () => {
      try {
        const friendsData = await getFriends(userData.memberId);

        setFriendData(friendsData);
      } catch (error) {
        console.error(error);
      }
    };
    if (!friendData || friendData.length === 0) {
      setFriends();
    }
  }, [modalValue]);

  const inviteHandler = async (memberId) => {
    await inviteProject(code, memberId);
    setModalValue(false);
  };

  if (!modalValue) {
    return null;
  }
  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
        <MainText>Share this project</MainText>
        <InviteBox>
          <SubText>초대하기</SubText>
          <InputBox>
            <InviteInput
              type="text"
              placeholder="Invite others by name or email"
            />
            <InviteBtn />
          </InputBox>
        </InviteBox>
        <SubText>친구목록</SubText>
        <FriendListBox>
          {friendData?.map((data, index) => (
            <ShareFriendItem
              data={data}
              key={index}
              inviteHandler={inviteHandler}
            />
          ))}
        </FriendListBox>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default ShareModal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 3.3vh;
  width: 22.91vw;
  height: 22.91vw;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.04vw;
`;

const CancelPostion = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
`;

const MainText = styled.p`
  font-size: 1.1vw;
  color: #4a4b70;
`;

const SubText = styled.p`
  font-size: 0.7vw;
  color: #4a4b70;
  margin-left: 0.3vw;
`;

const InviteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1vh;
`;

const FriendListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 18.33vh;
  overflow-y: auto;
  margin-top: -2vh;
  gap: 1.1vh;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1vh;
`;

const InviteInput = styled.input`
  width: 16.04vw;
  height: 3.7vh;
  border: 1px solid #a2a3b6;
  border-radius: 4px;
  padding: 0.5vw;
`;

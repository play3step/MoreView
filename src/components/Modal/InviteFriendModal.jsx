import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import CancelBtn from './atom/CancelBtn';
import InviteBtn from './atom/InviteBtn';
import { InviteModalState } from '../../store/modalState';
import { postFriend } from '../../apis/User/FriendController';
import { userInfo } from '../../store/userState';

function InviteFriendModal() {
  const [modalValue, setModalValue] = useRecoilState(InviteModalState);
  const userData = useRecoilValue(userInfo);
  const [email, setEmail] = useState();

  const CancelHandler = () => {
    setModalValue(false);
  };

  const addFriend = () => {
    try {
      postFriend(userData.memberId, email);
    } catch (error) {
      console.error(error);
    }
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
        <MainText>Add Friend</MainText>
        <InviteBox>
          <SubText>초대하기</SubText>
          <InputBox>
            <InviteInput
              type="text"
              placeholder="Invite others by name or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InviteBtn onClick={addFriend} />
          </InputBox>
        </InviteBox>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default InviteFriendModal;

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
  height: 18.3vh;
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

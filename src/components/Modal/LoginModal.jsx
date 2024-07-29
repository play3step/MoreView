import { useRecoilState } from 'recoil';
import { useState } from 'react';
import styled from 'styled-components';
import CancelBtn from './atom/CancelBtn';
import { LoginModalState } from '../../store/modalState';
import { loginController } from '../../apis/User/LoginController';

function LoginModal() {
  const [modalValue, setModalValue] = useRecoilState(LoginModalState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (!modalValue) {
    return null;
  }
  const CancelHandler = () => {
    setModalValue(false);
  };

  const LoginHandle = async () => {
    try {
      await loginController(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      error(error);
    }
  };
  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
        <MainTitle>로그인</MainTitle>
        <LoginInput
          placeholder="이메일"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginBtn type="button" onClick={LoginHandle}>
          생성
        </LoginBtn>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default LoginModal;

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
  align-items: center;
  flex-direction: column;
  width: 18.54vw;
  height: 48.3vh;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.04vw;
`;

const CancelPostion = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
`;

const MainTitle = styled.p`
  font-size: 1.2vw;
`;

const LoginInput = styled.input`
  width: 14.166666666666666vw;
  height: 4.907407407407407vh;
  padding: 0.6vw;
`;

const LoginBtn = styled.button`
  width: 14.16vw;
  height: 4.44vh;
`;

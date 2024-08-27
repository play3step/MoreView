import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { ReactComponent as Logo } from '../assets/logo.svg';
import LoginFormContainer from '../components/LoginPage/LoginFormContainer';
import { loginController } from '../apis/User/LoginController';
import { userInfo } from '../store/userState';

function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUserData = useSetRecoilState(userInfo);

  const LoginHandle = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    try {
      const member = await loginController(email, password);

      setUserData({
        memberId: member.memberId,
        token: member.token,
        name: member.name,
        email: member.email,
      });
      setEmail('');
      setPassword('');
      nav('/Projects');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <Container>
      <Logo />
      <LoginFormContainer
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        LoginHandle={LoginHandle}
      />
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

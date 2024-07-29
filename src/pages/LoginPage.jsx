import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import LoginFormContainer from '../components/LoginPage/LoginFormContainer';
import { loginController } from '../apis/User/LoginController';

function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const LoginHandle = () => {
    loginController(email, password);
    setEmail('');
    setPassword('');
    nav('/list');
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

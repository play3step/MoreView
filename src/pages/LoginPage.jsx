import styled from 'styled-components';
import SocialLoginBtn from '../components/LoginPage/SocialLoginBtn';

function LoginPage() {
  return (
    <LoginContainer>
      <LogoStyle>MoreView</LogoStyle>
      <SocialLoginBtn type="kakao" />
      <Despite>또는</Despite>
      <SocialLoginBtn type="naver" />
    </LoginContainer>
  );
}

export default LoginPage;

const LoginContainer = styled.div`
  width: 28.645vw;
  height: 63.888vh;
  border: 1px solid;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3vw auto;
`;

const LogoStyle = styled.h1`
  font-family: 'Anta', sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 2.6vw 0 4vw 0;
`;

const Despite = styled.p`
  margin: 1vw 0 1vw 0;
  color: #b1acac;
`;

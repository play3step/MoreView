import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SocialLoginBtn from '../components/LoginPage/SocialLoginBtn';
import CloseBtn from '../components/button/CloseBtn';

function LoginPage() {
  const navigate = useNavigate();
  const onCancel = () => {
    navigate(-1);
  };
  const NAVER = process.env.REACT_APP_NAVER;
  const KAKAO = process.env.REACT_APP_KAKAO;

  const routeToSocialLogin = (type) => {
    const url = type === 'naver' ? NAVER : KAKAO;
    window.location.href = url;
  };

  return (
    <LoginContainer>
      <BackPosition>
        <CloseBtn onClose={onCancel} />
      </BackPosition>
      <LogoStyle>MoreView</LogoStyle>
      <SocialLoginBtn
        type="kakao"
        onClick={() => routeToSocialLogin('kakao')}
      />
      <Despite>또는</Despite>
      <SocialLoginBtn
        type="naver"
        onClick={() => routeToSocialLogin('naver')}
      />
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
  position: relative;
`;

const LogoStyle = styled.h1`
  font-family: 'Anta', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.5vw;
  margin: 4.6vw 0 7vw 0;
`;

const Despite = styled.p`
  margin: 1vw 0 1vw 0;
  color: #b1acac;
`;

const BackPosition = styled.div`
  position: absolute;
  top: 1.5vw;
  left: 2vw;
`;

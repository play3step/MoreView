import styled from 'styled-components';
import { ReactComponent as Kakao } from '../../assets/socialLogin/kakao.svg';
import { ReactComponent as Naver } from '../../assets/socialLogin/naver.svg';

function SocialLoginBtn({ type, onClick }) {
  return (
    <SocialLoginBtnContainer onClick={onClick}>
      {type === 'kakao' && (
        <TextContainer>
          <Kakao alt="카카오" width="1.40625vw" height="2.5vh" />
          <SocialLoginText>카카오로 로그인하기</SocialLoginText>
        </TextContainer>
      )}
      {type === 'naver' && (
        <TextContainer>
          <Naver alt="네이버" width="1.40625vw" height="2.5vh" />
          <SocialLoginText>네이버로 로그인하기</SocialLoginText>
        </TextContainer>
      )}
    </SocialLoginBtnContainer>
  );
}
export default SocialLoginBtn;

const SocialLoginBtnContainer = styled.div`
  width: 22.86458vw;
  height: 5vh;
  border: 1px solid;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SocialLoginText = styled.span`
  margin-left: 0.6vw;
  font-size: 1.0416vw;
`;

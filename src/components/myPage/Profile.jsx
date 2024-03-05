import styled from 'styled-components';

function Profile() {
  return (
    <ProfileContainer>
      <p>박 철 현</p>
      <p>play3step@naver.com</p>
    </ProfileContainer>
  );
}
export default Profile;

const ProfileContainer = styled.div`
  width: 15.5208333vw;
  height: 5.555555vh;
  background-color: #545454;
  border-radius: 30px;
  color: #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

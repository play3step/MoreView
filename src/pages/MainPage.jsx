import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <Link
        to="/project"
        style={{
          fontSize: '36px',
        }}
      >
        프로젝트
      </Link>
      <Link
        to="/myPage"
        style={{
          fontSize: '36px',
          marginLeft: '24px',
        }}
      >
        마이페이지
      </Link>
      <Link
        to="/login"
        style={{
          fontSize: '36px',
          marginLeft: '24px',
        }}
      >
        로그인
      </Link>
    </>
  );
}
export default MainPage;

import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <Link
      to="/project"
      style={{
        fontSize: '36px',
      }}
    >
      프로젝트
    </Link>
  );
}
export default MainPage;

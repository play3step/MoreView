import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icon/home.svg';

function HomeBtn({ className }) {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <HomeButton className={className}>
        <Home alt="home" width="2.60416vw" height="4.6296vh" />
      </HomeButton>
    </Link>
  );
}
export default HomeBtn;

const HomeButton = styled.button`
  background-color: transparent;
  border: none;
`;

import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/icon/home.svg';

function HomeBtn({ className }) {
  return (
    <HomeButton className={className}>
      <Home alt="home" width="2.60416vw" height="4.6296vh" />
    </HomeButton>
  );
}
export default HomeBtn;

const HomeButton = styled.button`
  background-color: transparent;
  border: none;
`;

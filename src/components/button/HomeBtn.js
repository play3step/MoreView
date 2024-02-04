import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/home.svg';

function HomeBtn({ className }) {
  return (
    <HomeButton className={className}>
      <Home alt="home" />
    </HomeButton>
  );
}
export default HomeBtn;

const HomeButton = styled.button`
  background-color: transparent;
  border: none;
`;

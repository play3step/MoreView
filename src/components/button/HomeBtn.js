import styled from 'styled-components';
import Home from '../../assets/home.png';

function HomeBtn({ className }) {
  return (
    <HomeButton className={className}>
      <HomeImage src={Home} alt="home" />
    </HomeButton>
  );
}
export default HomeBtn;

const HomeButton = styled.button`
  background-color: transparent;
  border: none;
`;

const HomeImage = styled.img`
  width: 2.62vw;
  height: 3.88vh;
`;

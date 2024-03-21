import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Logo from './myPage/atom/Logo';
import MenuBtn from './myPage/atom/MenuBtn';
import SearchProject from './myPage/atom/SearchProject';

const types = ['About', 'OverView', 'Comments', 'Projects', 'Starred'];

function SideMenu() {
  const location = useLocation();
  const shouldShow = [
    '/',
    '/Projects',
    '/About',
    '/OverView',
    '/Comments',
    '/Starred',
  ].includes(location.pathname);

  if (!shouldShow) {
    return null;
  }
  return (
    <MenuContainer>
      <Logo />
      <SearchProject />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {types.map((value) => (
          <MenuBtn type={value} />
        ))}
      </div>
    </MenuContainer>
  );
}

export default SideMenu;

const MenuContainer = styled.div`
  width: 19.791666666666664vw;
  height: 100vh;
  background-color: #ffffff;
  padding: 1.4814814814814816vh 3.28125vw;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

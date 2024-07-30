import styled from 'styled-components';

import MenuBtn from '../myPage/atom/MenuBtn';

const types = ['Home', 'Projects', 'Friends', 'NewTech'];

function SideMenu() {
  return (
    <SideContainer>
      <div
        style={{
          marginLeft: '3.229166666666667vw',
        }}
      >
        {types.map((value, index) => (
          <MenuBtn type={value} key={index} />
        ))}
      </div>
    </SideContainer>
  );
}

export default SideMenu;

const SideContainer = styled.div`
  width: 14.47916vw;
  height: 92.22vh;
  background-color: #ffffff;
  padding-top: 8.518518518518519vh;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
`;

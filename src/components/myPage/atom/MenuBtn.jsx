import styled from 'styled-components';
import { ReactComponent as About } from '../../../assets/myPage/about.svg';
import { ReactComponent as OverView } from '../../../assets/myPage/overView.svg';
import { ReactComponent as Comments } from '../../../assets/myPage/comments.svg';
import { ReactComponent as Projects } from '../../../assets/myPage/projects.svg';
import { ReactComponent as Starred } from '../../../assets/myPage/starred.svg';
import { ReactComponent as User } from '../../../assets/myPage/user.svg';
import { ReactComponent as Setting } from '../../../assets/myPage/settings.svg';

const ICONS = {
  About,
  OverView,
  Comments,
  Projects,
  Starred,
  User,
  Setting,
};

function MenuBtn({ type }) {
  const Icon = ICONS[type];
  return (
    <MenuContainer>
      {Icon && (
        <Icon
          alt="item"
          width="1.3541666666666667vw"
          height="2.4074074074074074vh"
        />
      )}
      <MenuTitle>{type}</MenuTitle>
    </MenuContainer>
  );
}

export default MenuBtn;

const MenuContainer = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  margin-left: 2.7083333333333335vw;
  margin-bottom: 3.7037037037037033vh;
  align-items: center;
`;

const MenuTitle = styled.p`
  font-size: 0.8vw;
  margin-left: 0.7291666666666666vw;
  &:hover {
    color: #4d7df3;
  }
`;

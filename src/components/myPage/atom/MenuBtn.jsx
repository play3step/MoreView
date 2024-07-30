import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../../../assets/myPage/about.svg';
import { ReactComponent as NewTech } from '../../../assets/myPage/overView.svg';
import { ReactComponent as Comments } from '../../../assets/myPage/comments.svg';
import { ReactComponent as Projects } from '../../../assets/myPage/projects.svg';
import { ReactComponent as Starred } from '../../../assets/myPage/starred.svg';
import { ReactComponent as Friends } from '../../../assets/myPage/user.svg';
import { ReactComponent as Setting } from '../../../assets/myPage/settings.svg';

const ICONS = {
  Home,
  NewTech,
  Comments,
  Projects,
  Starred,
  Friends,
  Setting,
};

function MenuBtn({ type }) {
  const Icon = ICONS[type];
  return (
    <Link to={`/${type}`} style={{ textDecoration: 'none' }}>
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
    </Link>
  );
}

export default MenuBtn;

const MenuContainer = styled.div`
  background-color: transparent;
  display: flex;
  margin-bottom: 3.7vh;
  align-items: center;
`;

const MenuTitle = styled.p`
  font-size: 0.8vw;
  margin-left: 0.7291666666666666vw;
  &:hover {
    color: #4d7df3;
  }
`;

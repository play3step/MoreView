import styled from 'styled-components';
import HomeBtn from '../button/HomeBtn';
import RedoBtn from '../button/RedoBtn';
import UndoBtn from '../button/UndoBtn';
import PlayBtn from '../button/PlayBtn';
import AlarmBtn from '../button/AlarmBtn';

function ProjectHeaer({ fullScreen }) {
  return (
    <HeaderContainer>
      <LeftGroup>
        <StyledHomeBtn />
        <RedoBtn />
        <UndoBtn />
      </LeftGroup>

      <HeaderProjectName>프로젝트 이름</HeaderProjectName>
      <RightGroup>
        <PlayBtn fullScreen={fullScreen} />
        <AlarmBtn />
      </RightGroup>
    </HeaderContainer>
  );
}

export default ProjectHeaer;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 6.018vh;
  background-color: #353131;
  display: flex;
  align-items: center;
  position: relative;
`;

const HeaderProjectName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.1111vw;
  width: 26.35416vw;
  height: 4.444vh;
  background-color: #545454;
  border-radius: 1.3889vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const StyledHomeBtn = styled(HomeBtn)`
  margin-right: 2vw;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4vw;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 4vw;
`;

import styled from 'styled-components';
import SortList from '../components/myPage/SortList';
import ProjectBox from '../components/myPage/ProjectBox';
import Profile from '../components/myPage/Profile';
import SearchBox from '../components/myPage/SearchBox';

function MyPage() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <ListContainer>
        <Profile />
        <SearchBoxContainer>
          <SearchBox />
        </SearchBoxContainer>
      </ListContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <HeaderContainer />
        <ProjectContainer>
          <SortList />
          <ProjectGrid>
            <ProjectBox />
          </ProjectGrid>
        </ProjectContainer>
      </div>
    </div>
  );
}

export default MyPage;

const HeaderContainer = styled.div`
  width: 83.4375vw;
  height: 7.87037037037037vh;
  background-color: #f8f8f8;
  border-bottom: 1px solid;
`;

const ListContainer = styled.div`
  width: 16.5625vw;
  height: 100vh;
  background-color: #f8f8f8;
  border-right: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1vh;
`;

const ProjectContainer = styled.div`
  width: 79.01041666666667vw;
  height: 63.05555555555556vh;
  margin-top: 26.851851851851855vh;
  margin-left: 1.6vw;
  border: 1px solid;
`;

const ProjectGrid = styled.div`
  margin: 2vw 0 0 2vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.67708vw, 1fr));
  gap: 1.6vw;
`;

const SearchBoxContainer = styled.div`
  margin-top: 1.5vw;
`;

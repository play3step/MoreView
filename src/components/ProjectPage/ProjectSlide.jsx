import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import SlideClose from './SlideComponents/SlideClose';
import SlideList from './SlideComponents/atom/SlideList';
import { pageState } from '../../store/recoil';

function ProjectSlide() {
  const setPage = useSetRecoilState(pageState);
  return (
    <SlideListContainer>
      <SlideClose />
      <SlideBoxContainer>
        <SlideList
          onClick={() => {
            setPage(0);
          }}
        />
        <SlideList
          onClick={() => {
            setPage(1);
          }}
        />
        <SlideList
          onClick={() => {
            setPage(2);
          }}
        />
      </SlideBoxContainer>
    </SlideListContainer>
  );
}

export default ProjectSlide;

const SlideListContainer = styled.div`
  width: 94.375vw;
  height: 27.974vh;
  background-color: #e9e9e9;
`;

const SlideBoxContainer = styled.div`
  display: flex;
  padding: 2.8vh 2.7vw;
  align-items: center;
  gap: 30px;
`;

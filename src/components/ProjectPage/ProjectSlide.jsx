import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import SlideClose from './SlideComponents/SlideClose';
import SlideList from './SlideComponents/atom/SlideList';
import { pageData, pageState } from '../../store/recoil';

function ProjectSlide({ slideOpen }) {
  const setPage = useSetRecoilState(pageState);
  const pageValue = useRecoilValue(pageData);
  return (
    <SlideListContainer>
      <SlideClose slideOpen={slideOpen} />
      <SlideBoxContainer>
        {pageValue.map((page, index) => (
          <SlideList
            onClick={() => {
              setPage(index);
            }}
          />
        ))}
      </SlideBoxContainer>
    </SlideListContainer>
  );
}

export default ProjectSlide;

const SlideListContainer = styled.div`
  width: 95.833vw;
  height: 27.9vh;
  background-color: #e9e9e9;
`;

const SlideBoxContainer = styled.div`
  display: flex;
  padding: 2.8vh 2.7vw;
  align-items: center;
  gap: 30px;
`;

import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import SlideClose from './SlideComponents/SlideClose';
import SlideList from './SlideComponents/atom/SlideList';
import { pageData, pageState } from '../../store/recoil';
import AddSlide from './SlideComponents/atom/AddSlide';
import Project2dView from './SlideComponents/atom/Project2dView';

function ProjectSlide({
  slideOpen,
  addSlide,
  textValue,
  shapeValue,
  imgValue,
}) {
  const [pageRendering, setPageRendering] = useRecoilState(pageState);
  const pageValue = useRecoilValue(pageData);

  return (
    <SlideListContainer>
      <SlideClose slideOpen={slideOpen} />
      <SlideBoxContainer>
        {pageValue.map((page, index) => (
          <SlideList
            onClick={() => {
              setPageRendering(index);
            }}
            select={index === pageRendering}
          />
        ))}
        <Project2dView
          pageRendering={pageRendering}
          textValue={textValue}
          shapeValue={shapeValue}
          imgValue={imgValue}
          pageSize={0.2}
        />
        <AddSlide onClick={addSlide} />
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
  overflow-x: auto;
  gap: 30px;
`;

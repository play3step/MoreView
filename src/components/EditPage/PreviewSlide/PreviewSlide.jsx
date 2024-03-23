import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pageData, pageState } from '../../../store/recoil';
import Preview2d from './atom/Preview2d';
import AddSlide from './atom/AddSlide';

function PreviewSlide({ textValue, shapeValue, imgValue, addSlide }) {
  const [pageRendering, setPageRendering] = useRecoilState(pageState);
  const pageValue = useRecoilValue(pageData);
  return (
    <>
      <SlideContainer>
        <SlideBoxContainer>
          {pageValue.map((page, index) => (
            <Preview2d
              id={index}
              pageRendering={pageRendering}
              textValue={textValue}
              shapeValue={shapeValue}
              imgValue={imgValue}
              pageSize={0.14}
              onClick={() => {
                setPageRendering(index);
              }}
              select={index === pageRendering}
            />
          ))}
        </SlideBoxContainer>
      </SlideContainer>
      <AddSlide onClick={addSlide} />
    </>
  );
}

export default PreviewSlide;

const SlideContainer = styled.div`
  width: 16.666666666666664vw;
  height: 82.5925925925926vh;
  border-right: 1px solid #747684;
  overflow: scroll;
`;

const SlideBoxContainer = styled.div`
  display: flex;
  padding: 2.8vh 2.7vw;
  align-items: center;
  position: relative;
  gap: 30px;
  flex-direction: column;
  overflow: hidden;
`;

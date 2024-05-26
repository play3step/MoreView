import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Canvas } from '@react-three/fiber';
import { object3dState, pageData, pageState } from '../../../store/recoil';
import Preview2d from './atom/Preview2d';
import AddSlide from './atom/AddSlide';
import Preview3d from './atom/Preview3d';

function PreviewSlide({ textValue, shapeValue, imgValue, addSlide }) {
  const [pageRendering, setPageRendering] = useRecoilState(pageState);
  const pageValue = useRecoilValue(pageData);
  const objectValue = useRecoilValue(object3dState);

  return (
    <>
      <SlideContainer>
        <SlideBoxContainer>
          {pageValue.map((page, index) =>
            page.type === '2d' ? (
              <Preview2d
                key={index} // key 추가
                id={index}
                pageType={page.type}
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
            ) : (
              <SlideListBox
                key={page.id}
                select={index === pageRendering}
                onClick={() => {
                  setPageRendering(index);
                }}
              >
                <Canvas
                  backgroundColor="#FFFFFF"
                  style={{
                    width: '13.8vw',
                    height: '13vh',
                  }}
                >
                  <Preview3d objecturl={objectValue[pageRendering]} />
                </Canvas>
              </SlideListBox>
            ),
          )}
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
const SlideListBox = styled.button`
  border: 2px solid ${({ select }) => (select ? '#4D7DF3' : '#747684')};
  background-color: #d9d9d9;
  flex-shrink: 0;
  position: relative;
  width: 14vw;
  height: 13.4vh;
`;

import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  interactiveState,
  pageData,
  pageState,
  shapeList,
  textList,
} from '../store/recoil';

import ProjectHeaer from '../components/ProjectPage/ProjectHeader';
import ProjectItem from '../components/ProjectPage/ProjectItem';
import DesignInteractive from '../components/ProjectPage/ItemComponents/DesignInteractive';
import ElementInteractive from '../components/ProjectPage/ItemComponents/ElementInteractive';
import TextInteractive from '../components/ProjectPage/ItemComponents/TextInteractive';
import ProjectSlide from '../components/ProjectPage/ProjectSlide';
import Project3d from '../components/ProjectPage/PageData/Project3d';
import Prjoect2d from '../components/ProjectPage/PageData/Project2d';

function ProjectPage() {
  const [selectedId, selectShape] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const pageRendering = useRecoilValue(pageState);
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);
  const [textValue, setTextValue] = useRecoilState(textList);
  const [menu, setMenu] = useRecoilState(interactiveState);
  const [pageValue, setPageValue] = useRecoilState(pageData);

  const handleClose = () => {
    setMenu(0);
  };
  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };
  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  const handleDragEnd = (shapeId, newAttrs) => {
    const currentPageShapes = shapeValue[pageRendering]
      ? [...shapeValue[pageRendering]]
      : [];
    const updatedShapes = currentPageShapes.map((shape) => {
      if (shape.id === shapeId) {
        return { ...shape, ...newAttrs };
      }
      return shape;
    });
    setShapeValue({ ...shapeValue, [pageRendering]: updatedShapes });
  };
  const handleTextDragEnd = (textId, newAttrs) => {
    setTextValue((prevTextValue) => ({
      ...prevTextValue,
      [pageRendering]: prevTextValue[pageRendering].map((item) =>
        item.id === textId ? { ...item, ...newAttrs } : item,
      ),
    }));
  };
  const handleTextChange = (textId, newText) => {
    setTextValue((prevTextValue) => ({
      ...prevTextValue,
      [pageRendering]: prevTextValue[pageRendering].map((item) =>
        item.id === textId ? { ...item, text: newText } : item,
      ),
    }));
  };
  const addSlide = () => {
    setPageValue((oldPageData) => {
      const newId = oldPageData.length > 0 ? oldPageData.length : 0;
      const newPage = { id: newId, type: '2d' };
      // 새 페이지 객체를 기존 배열에 추가합니다.
      return [...oldPageData, newPage];
    });
  };
  return (
    <ProjectContainer>
      <ProjectHeaer />
      <div
        style={{
          display: 'flex',
        }}
      >
        <ProjectItem />
        <motion.div
          key={menu}
          initial={{ x: '-2vw', opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: 'easeOut' },
          }}
          style={{
            zIndex: 1,
          }}
        >
          {menu === 1 && <DesignInteractive onClose={handleClose} />}
          {menu === 2 && <ElementInteractive onClose={handleClose} />}
          {menu === 3 && <TextInteractive onClose={handleClose} />}
        </motion.div>
        <CanvasContainer>
          <p>{pageRendering + 1} 페이지</p>
          {pageValue.map((page) => {
            if (page.id === pageRendering) {
              return page.type === '2d' ? (
                <Prjoect2d
                  key={page.id}
                  pageRendering={pageRendering}
                  textValue={textValue}
                  shapeValue={shapeValue}
                  handleTextChange={handleTextChange}
                  handleDragEnd={handleDragEnd}
                  handleTextDragEnd={handleTextDragEnd}
                  checkDeselect={checkDeselect}
                  selectedId={selectedId}
                  selectShape={selectShape}
                />
              ) : (
                <Canvas
                  key={page.id}
                  style={{
                    backgroundColor: '#D9D9D9',
                    width: '83.33333333333334vw',
                    height: '83.33333333333334vh',
                  }}
                >
                  <Project3d />
                </Canvas>
              );
            }
            return null;
          })}
        </CanvasContainer>
      </div>

      <SlideListPosition>
        <motion.div
          animate={{
            y: isOpen ? 0 : '23.8vh', // isOpen에 따라 Y 위치 변경
          }}
          transition={{ duration: 0.5 }} // 애니메이션 지속 시간
          initial="hidden"
        >
          <ProjectSlide slideOpen={toggleSlide} addSlide={addSlide} />
        </motion.div>
      </SlideListPosition>
    </ProjectContainer>
  );
}

export default ProjectPage;

const ProjectContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const CanvasContainer = styled.div`
  position: absolute;
  z-index: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const SlideListPosition = styled.div`
  position: absolute;
  left: 4.166vw;
  bottom: 0;
  overflow: hidden;
`;

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import {
  editState,
  imageList,
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
  const [pageRendering, setPageRendering] = useRecoilState(pageState);
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);
  const [textValue, setTextValue] = useRecoilState(textList);
  const [imgValue, setImgValue] = useRecoilState(imageList);
  const [menu, setMenu] = useRecoilState(interactiveState);
  const [pageValue, setPageValue] = useRecoilState(pageData);
  const isEditing = useRecoilValue(editState);

  const fullScreenHandle = useFullScreenHandle();
  const isFullScreen = fullScreenHandle.active;

  const toggleFullScreen = () => {
    fullScreenHandle.enter();
  };

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

  const handleImgDragEnd = (imageId, newImage) => {
    setImgValue((prevImgValue) => ({
      ...prevImgValue,
      [pageRendering]: prevImgValue[pageRendering].map((item) =>
        item.id === imageId ? { ...item, ...newImage } : item,
      ),
    }));
  };
  const addSlide = () => {
    setPageValue((oldPageData) => {
      const newId = oldPageData.length > 0 ? oldPageData.length : 0;
      const newPage = { id: newId, type: '2d' };
      return [...oldPageData, newPage];
    });
  };
  const onLineUpdate = (shapeId, newPoints) => {
    const currentPageShapes = Array.isArray(shapeValue[pageRendering])
      ? shapeValue[pageRendering]
      : [];

    const updatedShapes = currentPageShapes.map((shape) => {
      if (shape.id === shapeId) {
        return { ...shape, points: newPoints };
      }
      return shape;
    });

    setShapeValue({ ...shapeValue, [pageRendering]: updatedShapes });
  };
  console.log(shapeValue);
  useEffect(() => {
    const handleKeyEvent = (e) => {
      if (isEditing) {
        return;
      }
      if (e.key === 'ArrowLeft' && pageRendering > 0) {
        setPageRendering(pageRendering - 1);
      } else if (
        e.key === 'ArrowRight' &&
        pageValue.length - 1 > pageRendering
      ) {
        setPageRendering(pageRendering + 1);
      }
    };

    window.addEventListener('keydown', handleKeyEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [isEditing, pageRendering]);

  return (
    <ProjectContainer>
      <ProjectHeaer fullScreen={toggleFullScreen} />
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
          <FullScreen handle={fullScreenHandle}>
            <div
              style={{
                ...(isFullScreen
                  ? {
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }
                  : {}),
              }}
            >
              {pageValue.map((page) => {
                if (page.id === pageRendering) {
                  return page.type === '2d' ? (
                    <Prjoect2d
                      key={page.id}
                      pageRendering={pageRendering}
                      textValue={textValue}
                      shapeValue={shapeValue}
                      imgValue={imgValue}
                      handleTextChange={handleTextChange}
                      handleDragEnd={handleDragEnd}
                      handleTextDragEnd={handleTextDragEnd}
                      handleImgDragEnd={handleImgDragEnd}
                      checkDeselect={checkDeselect}
                      selectedId={selectedId}
                      selectShape={selectShape}
                      onLineUpdate={onLineUpdate}
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
            </div>
          </FullScreen>
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

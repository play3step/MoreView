import styled from 'styled-components';
import { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { useRecoilState, useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';

import { interactiveState, pageState, shapeList } from '../store/recoil';

import ProjectHeaer from '../components/ProjectPage/ProjectHeader';
import ProjectItem from '../components/ProjectPage/ProjectItem';
import ProjectKonva from '../components/ProjectPage/ProjectKonva';
import DesignInteractive from '../components/ProjectPage/ItemComponents/DesignInteractive';
import ElementInteractive from '../components/ProjectPage/ItemComponents/ElementInteractive';
import TextInteractive from '../components/ProjectPage/ItemComponents/TextInteractive';
import ProjectSlide from '../components/ProjectPage/ProjectSlide';

function ProjectPage() {
  const [selectedId, selectShape] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const pageRendering = useRecoilValue(pageState);
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);
  const [menu, setMenu] = useRecoilState(interactiveState);
  const handleClose = () => {
    setMenu(0);
  };
  const toggleSlide = () => {
    setIsOpen(!isOpen); // 상태 토글
  };
  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
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
          {pageRendering === 0 && <h1>안녕</h1>}
          {pageRendering === 1 && (
            <Stage
              width={1200}
              height={600}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
            >
              <Layer>
                <Rect x={0} y={0} width={1200} height={600} fill="#D9D9D9" />
                {shapeValue?.map((rect, i) => (
                  <ProjectKonva
                    key={rect.id}
                    shapeProps={rect}
                    isSelected={rect.id === selectedId}
                    onSelect={() => selectShape(rect.id)}
                    onChange={(newAttrs) => {
                      const rects = shapeValue.slice();
                      rects[i] = newAttrs;
                      setShapeValue(rects);
                    }}
                  />
                ))}
              </Layer>
            </Stage>
          )}
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
          <ProjectSlide slideOpen={toggleSlide} />
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
  top: 15%;
  transform: translateX(-50%);
`;
const SlideListPosition = styled.div`
  position: absolute;
  left: 5.6vw;
  bottom: 0;
  overflow: hidden; // 이 부분 추가
`;

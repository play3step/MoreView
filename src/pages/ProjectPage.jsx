import styled from 'styled-components';
import { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { useRecoilState, useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';

import { interactiveState, pageState } from '../store/recoil';

import ProjectHeaer from '../components/ProjectPage/ProjectHeader';
import ProjectItem from '../components/ProjectPage/ProjectItem';
import ProjectKonva from '../components/ProjectPage/ProjectKonva';
import DesignInteractive from '../components/ProjectPage/ItemComponents/DesignInteractive';
import ElementInteractive from '../components/ProjectPage/ItemComponents/ElementInteractive';
import TextInteractive from '../components/ProjectPage/ItemComponents/TextInteractive';
import ProjectSlide from '../components/ProjectPage/ProjectSlide';

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: 'red',
    id: 'rect1',
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: 'green',
    id: 'rect2',
  },
];

function ProjectPage() {
  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const pageRendering = useRecoilValue(pageState);

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
        >
          {menu === 1 && <DesignInteractive onClose={handleClose} />}
          {menu === 2 && <ElementInteractive onClose={handleClose} />}
          {menu === 3 && <TextInteractive onClose={handleClose} />}
        </motion.div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '15%',
            transform: 'translateX(-50%)',
          }}
        >
          {pageRendering === 0 && <h1>안녕</h1>}
          {pageRendering === 1 && (
            <Stage
              width={300}
              height={300}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
            >
              <Layer>
                {/* 배경색 설정을 위한 Rect 추가 */}
                <Rect x={0} y={0} width={500} height={500} fill="#D9D9D9" />
                {rectangles.map((rect, i) => (
                  <ProjectKonva
                    key={rect.id} // Key prop 추가
                    shapeProps={rect}
                    isSelected={rect.id === selectedId}
                    onSelect={() => selectShape(rect.id)}
                    onChange={(newAttrs) => {
                      const rects = rectangles.slice();
                      rects[i] = newAttrs;
                      setRectangles(rects);
                    }}
                  />
                ))}
              </Layer>
            </Stage>
          )}
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
      </div>
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
const SlideListPosition = styled.div`
  position: absolute;
  left: 5.6vw;
  bottom: 0;
  overflow: hidden; // 이 부분 추가
`;

import styled from 'styled-components';
import { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import ProjectHeaer from '../components/ProjectPage/ProjectHeader';
import ProjectItem from '../components/ProjectPage/ProjectItem';
import ProjectKonva from '../components/ProjectPage/ProjectKonva';

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
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '15%',
            transform: 'translateX(-50%)',
          }}
        >
          <Stage
            width={500}
            height={500}
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
        </div>
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

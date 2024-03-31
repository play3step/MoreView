import { Stage, Layer, Rect, Text, Image, Ellipse, Line } from 'react-konva';
import { useEffect, useState } from 'react';
import useImage from 'use-image';
import styled from 'styled-components';

function ImageComponent({ src, x, y, width, height }) {
  const [image] = useImage(src, 'Anonymous');
  return <Image image={image} x={x} y={y} width={width} height={height} />;
}

function Preview2d({
  id,
  textValue,
  shapeValue,
  imgValue,
  pageSize,
  onClick,
  select,
  pageType,
}) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(pageType);
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SlideListBox onClick={onClick} select={select}>
      <SlideNum>
        {id + 1}. {pageType.toUpperCase()}
      </SlideNum>
      <Stage
        width={dimensions.width * pageSize}
        height={dimensions.height * pageSize}
        scaleX={pageSize} // 모든 콘텐츠를 축소하기 위한 스케일 조정
        scaleY={pageSize}
      >
        <Layer>
          <Rect
            x={0}
            y={0}
            width={dimensions.width}
            height={dimensions.height}
            fill="#FFFFFF"
          />
          {textValue[id]?.map((textItem) => (
            <Text
              text={textItem.text}
              x={textItem.x}
              y={textItem.y}
              fontSize={20}
            />
          ))}
          {imgValue[id]?.map((imgItem) => (
            <ImageComponent
              src={imgItem.url}
              x={imgItem.x}
              y={imgItem.y}
              width={imgItem.width}
              height={imgItem.height}
            />
          ))}
          {shapeValue[id]?.map((shape) => {
            if (shape.type === 'Rectangle') {
              return (
                <Rect
                  x={shape.x}
                  y={shape.y}
                  width={shape.width}
                  height={shape.height}
                  fill={shape.fill}
                />
              );
            }
            if (shape.type === 'Circle') {
              return (
                <Ellipse
                  x={shape.x}
                  y={shape.y}
                  radiusX={shape.radiusX}
                  radiusY={shape.radiusY}
                  fill={shape.fill}
                />
              );
            }
            if (shape.type === 'Line') {
              return (
                <Line
                  points={shape.points}
                  stroke={shape.stroke}
                  strokeWidth={8}
                />
              );
            }
            return null;
          })}
        </Layer>
      </Stage>
    </SlideListBox>
  );
}

export default Preview2d;

const SlideListBox = styled.button`
  border: 2px solid ${({ select }) => (select ? '#4D7DF3' : '#747684')};
  background-color: #d9d9d9;
  flex-shrink: 0; // 크기 조절 비활성화
  position: relative;
`;

const SlideNum = styled.p`
  font-size: 1vw;
  position: absolute;
  top: 0.25vw;
  left: 0.45vw;
  z-index: 2;
`;

import { Stage, Layer, Rect, Text, Image, Ellipse, Line } from 'react-konva';
import { useEffect, useState } from 'react';
import useImage from 'use-image';

function ImageComponent({ src, x, y, width, height }) {
  const [image] = useImage(src, 'Anonymous');
  return <Image image={image} x={x} y={y} width={width} height={height} />;
}

function Project2dView({
  pageRendering,
  textValue,
  shapeValue,
  imgValue,
  pageSize,
}) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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
          fill="#D9D9D9"
        />
        {textValue[pageRendering]?.map((textItem) => (
          <Text
            text={textItem.text}
            x={textItem.x}
            y={textItem.y}
            fontSize={20}
          />
        ))}
        {imgValue[pageRendering]?.map((imgItem) => (
          <ImageComponent
            src={imgItem.url}
            x={imgItem.x}
            y={imgItem.y}
            width={imgItem.width}
            height={imgItem.height}
          />
        ))}
        {shapeValue[pageRendering]?.map((shape) => {
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
  );
}

export default Project2dView;

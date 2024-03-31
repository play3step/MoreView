import { Stage, Layer, Rect } from 'react-konva';
import { useEffect, useState } from 'react';
import EditableText from '../Editable/EditableText';
import EditablRect from '../Editable/EditablRect';
import EditableCircle from '../Editable/EditableCircle';
import EditableLine from '../Editable/EditableLine';
import EditableImage from '../Editable/EditableImage';

function Edit2d({
  pageRendering,
  textValue,
  shapeValue,
  handleTextChange,
  handleDragEnd,
  handleTextDragEnd,
  checkDeselect,
  selectedId,
  selectShape,
  onLineUpdate,
  imgValue,
  handleImgDragEnd,
  pageSize,
  handleImgTransform,
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
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        <Rect
          x={0}
          y={0}
          width={dimensions.width}
          height={dimensions.height}
          fill="#FBFBFD"
        />
        {textValue[pageRendering]?.map((textItem) => (
          <EditableText
            key={textItem.id}
            id={textItem.id}
            x={textItem.x}
            y={textItem.y}
            initialText={textItem}
            onTextChange={(newText) => handleTextChange(textItem.id, newText)}
            onDragEnd={handleTextDragEnd}
          />
        ))}
        {imgValue[pageRendering]?.map((imgItem) => (
          <EditableImage
            key={imgItem.id}
            id={imgItem.id}
            imgItem={imgItem}
            imageUrl={imgItem.url}
            x={imgItem.x}
            y={imgItem.y}
            width={imgItem.width}
            height={imgItem.height}
            onDragEnd={handleImgDragEnd}
            isSelected={selectedId === imgItem.id}
            onSelect={() => selectShape(imgItem.id)}
            onTransformEnd={(newAttrs) => {
              handleImgTransform(imgItem.id, newAttrs);
            }}
          />
        ))}
        {shapeValue[pageRendering]?.map((shape) => {
          if (shape.type === 'Rectangle') {
            return (
              <EditablRect
                key={shape.id}
                shapeProps={shape}
                isSelected={shape.id === selectedId}
                onSelect={() => selectShape(shape.id)}
                onChange={(newAttrs) => handleDragEnd(shape.id, newAttrs)}
              />
            );
          }
          if (shape.type === 'Circle') {
            return (
              <EditableCircle
                key={shape.id}
                shapeProps={shape}
                isSelected={shape.id === selectedId}
                onSelect={() => selectShape(shape.id)}
                onChange={(newAttrs) => handleDragEnd(shape.id, newAttrs)}
              />
            );
          }
          if (shape.type === 'Line') {
            return (
              <EditableLine
                key={shape.id}
                points={shape.points}
                stroke={shape.stroke}
                strokeWidth={shape.strokeWidth}
                onDragEnd={(e) =>
                  handleDragEnd(shape.id, {
                    x: e.target.x(),
                    y: e.target.y(),
                    points: [...e.target.points()],
                  })
                }
                onLineUpdate={(newPoints) => onLineUpdate(shape.id, newPoints)} // onLineUpdate props 추가
              />
            );
          }
          return null;
        })}
      </Layer>
    </Stage>
  );
}

export default Edit2d;

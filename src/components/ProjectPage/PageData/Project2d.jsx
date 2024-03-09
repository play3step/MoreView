import { Stage, Layer, Rect } from 'react-konva';
import EditableText from '../Editable/EditableText';
import EditablRect from '../Editable/EditablRect';
import EditableCircle from '../Editable/EditableCircle';
import EditableLine from '../Editable/EditableLine';
import EditableImage from '../Editable/EditableImage';

function Prjoect2d({
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
}) {
  return (
    <Stage
      width={1600}
      height={900}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        <Rect x={0} y={0} width={1600} height={900} fill="#D9D9D9" />
        {textValue[pageRendering]?.map((textItem) => (
          <EditableText
            key={textItem.id}
            id={textItem.id}
            x={textItem.x}
            y={textItem.y}
            initialText={textItem.text}
            onTextChange={(newText) => handleTextChange(textItem.id, newText)}
            onDragEnd={handleTextDragEnd}
          />
        ))}
        {imgValue[pageRendering]?.map((imgItem) => (
          <EditableImage
            key={imgItem.id}
            id={imgItem.id}
            imageUrl={imgItem.url}
            x={imgItem.x}
            y={imgItem.y}
            width={imgItem.width}
            height={imgItem.height}
            onDragEnd={handleImgDragEnd}
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

export default Prjoect2d;

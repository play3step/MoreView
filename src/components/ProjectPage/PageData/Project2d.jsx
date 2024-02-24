import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import EditableText from '../Editable/EditableText';
import EditablRect from '../Editable/EditablRect';

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
}) {
  return (
    <Stage
      width={800}
      height={500}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        <Rect x={0} y={0} width={800} height={500} fill="#D9D9D9" />
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
              <Circle
                key={shape.id}
                {...shape}
                onClick={() => selectShape(shape.id)}
                draggable
                onDragEnd={(e) => handleDragEnd(shape.id, e.target.attrs)}
              />
            );
          }
          if (shape.type === 'Triangle') {
            return (
              <Line
                key={shape.id}
                points={shape.points}
                fill={shape.fill}
                closed
                onClick={() => selectShape(shape.id)}
                draggable
                onDragEnd={(e) =>
                  handleDragEnd(shape.id, {
                    x: e.target.x(),
                    y: e.target.y(),
                  })
                }
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

import { Stage, Layer, Rect } from 'react-konva';
import EditableText from '../Editable/EditableText';
import EditablRect from '../Editable/EditablRect';
import EditableCircle from '../Editable/EditableCircle';

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
              <EditableCircle
                key={shape.id}
                shapeProps={shape}
                isSelected={shape.id === selectedId}
                onSelect={() => selectShape(shape.id)}
                onChange={(newAttrs) => handleDragEnd(shape.id, newAttrs)}
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

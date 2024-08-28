const useShapeHandlers = (
  shapeValue,
  pageRendering,
  setShapeValue,
  socket,
  code,
) => {
  const handleDragEnd = (shapeId, newAttrs) => {
    const currentPageShapes = shapeValue[pageRendering]
      ? [...shapeValue[pageRendering]]
      : [];
    const updatedShapes = currentPageShapes.map((shape) => {
      if (shape.id === shapeId) {
        let shapeData = null;

        if (shape.type === 'Rectangle') {
          shapeData = {
            saveType: '0',
            editType: `edit${shape.type}`,
            deleteType: '0',
            roomId: code,
            rectangle: {
              rectangleId: shape.rectangleId,
              projectId: shape.projectId,
              pageId: shape.pageId,
              id: shape.id,
              width: newAttrs.width,
              height: newAttrs.height,
              x: newAttrs.x,
              y: newAttrs.y,
              fill: shape.fill,
              type: shape.type,
            },
          };
        } else if (shape.type === 'Circle') {
          shapeData = {
            saveType: '0',
            editType: `edit${shape.type}`,
            deleteType: '0',
            roomId: code,
            circle: {
              circleId: shape.circleId,
              projectId: shape.projectId,
              pageId: shape.pageId,
              id: shape.id,
              radiusX: shape.radiusX,
              radiusY: shape.radiusY,
              x: newAttrs.x,
              y: newAttrs.y,
              fill: shape.fill,
              type: shape.type,
            },
          };
        }
        // WebSocket 메시지 전송
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(shapeData));
        } else {
          console.error('WebSocket is not open');
        }

        return { ...shape, ...newAttrs };
      }
      return shape;
    });
    setShapeValue({ ...shapeValue, [pageRendering]: updatedShapes });
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
  return {
    handleDragEnd,
    onLineUpdate,
  };
};

export default useShapeHandlers;

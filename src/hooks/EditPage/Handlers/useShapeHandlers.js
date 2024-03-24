const useShapeHandlers = (shapeValue, pageRendering, setShapeValue) => {
  const handleDragEnd = (shapeId, newAttrs) => {
    const currentPageShapes = shapeValue[pageRendering]
      ? [...shapeValue[pageRendering]]
      : [];
    const updatedShapes = currentPageShapes.map((shape) => {
      if (shape.id === shapeId) {
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

import { useEffect } from 'react';

const useDeleteItem = (
  isEditing,
  selectedId,
  shapeValue,
  textValue,
  imgValue,
  pageRendering,
  setShapeValue,
  setTextValue,
  setImgValue,
  setSelectedId,
) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        !isEditing &&
        (e.key === 'Backspace' || e.key === 'Delete') &&
        selectedId
      ) {
        e.preventDefault();

        const deleteObject = (prev, id) => {
          const currentPageObjects = prev[pageRendering] || [];
          const filteredObjects = currentPageObjects.filter(
            (object) => object.id !== id,
          );
          return { ...prev, [pageRendering]: filteredObjects };
        };

        if (
          shapeValue[pageRendering]?.some((object) => object.id === selectedId)
        ) {
          setShapeValue((prev) => deleteObject(prev, selectedId));
        } else if (
          textValue[pageRendering]?.some((object) => object.id === selectedId)
        ) {
          setTextValue((prev) => deleteObject(prev, selectedId));
        } else if (
          imgValue[pageRendering]?.some((object) => object.id === selectedId)
        ) {
          setImgValue((prev) => deleteObject(prev, selectedId));
        }

        setSelectedId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isEditing,
    selectedId,
    shapeValue,
    textValue,
    imgValue,
    pageRendering,
    setShapeValue,
    setTextValue,
    setImgValue,
    setSelectedId,
  ]);
};

export default useDeleteItem;

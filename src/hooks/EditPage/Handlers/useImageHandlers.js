const useImageHandlers = (imgValue, setImgValue, pageRendering) => {
  const handleImgTransform = (id, newAttrs) => {
    const updatedImgValue = imgValue[pageRendering].map((img) => {
      if (img.id === id) {
        return { ...img, ...newAttrs };
      }
      return img;
    });
    setImgValue({
      ...imgValue,
      [pageRendering]: updatedImgValue,
    });
  };
  const handleImgDragEnd = (imageId, newImage) => {
    setImgValue((prevImgValue) => ({
      ...prevImgValue,
      [pageRendering]: prevImgValue[pageRendering].map((item) =>
        item.id === imageId ? { ...item, ...newImage } : item,
      ),
    }));
  };
  return {
    handleImgTransform,
    handleImgDragEnd,
  };
};

export default useImageHandlers;

const useTextHandlers = (setTextValue, pageRendering) => {
  const handleTextDragEnd = (textId, newAttrs) => {
    setTextValue((prevTextValue) => ({
      ...prevTextValue,
      [pageRendering]: prevTextValue[pageRendering].map((item) =>
        item.id === textId ? { ...item, ...newAttrs } : item,
      ),
    }));
  };
  const handleTextChange = (textId, newText) => {
    setTextValue((prevTextValue) => ({
      ...prevTextValue,
      [pageRendering]: prevTextValue[pageRendering].map((item) =>
        item.id === textId ? { ...item, text: newText } : item,
      ),
    }));
  };
  return {
    handleTextDragEnd,
    handleTextChange,
  };
};

export default useTextHandlers;

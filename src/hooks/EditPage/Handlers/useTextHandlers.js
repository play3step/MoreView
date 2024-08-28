const useTextHandlers = (
  textValue,
  setTextValue,
  pageRendering,
  socket,
  code,
) => {
  const handleTextDragEnd = (textId, newAttrs) => {
    const currentItem = textValue[pageRendering].find(
      (item) => item.id === textId,
    );
    console.log(currentItem);
    setTextValue((prevTextValue) => ({
      ...prevTextValue,
      [pageRendering]: prevTextValue[pageRendering].map((item) =>
        item.id === textId ? { ...item, ...newAttrs } : item,
      ),
    }));
    const textData = {
      saveType: 'saveText',
      editType: '0',
      deleteType: '0',
      roomId: code,
      text: {
        textId: currentItem.textId,
        projectId: currentItem.projectId,
        pageId: currentItem.pageId,
        id: currentItem.id,
        text: currentItem.text,
        x: newAttrs.x,
        y: newAttrs.y,
        size: newAttrs.size || currentItem.size,
        color: newAttrs.color || currentItem.color,
      },
    };

    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(textData));
    } else {
      console.error('WebSocket is not open');
    }
  };
  const handleTextChange = (textId, newText) => {
    const currentItem = textValue[pageRendering].find(
      (item) => item.id === textId,
    );
    setTextValue((prevTextValue) => ({
      ...prevTextValue,
      [pageRendering]: prevTextValue[pageRendering].map((item) =>
        item.id === textId ? { ...item, text: newText } : item,
      ),
    }));
    const textData = {
      saveType: 'saveText',
      editType: '0',
      deleteType: '0',
      roomId: code,
      text: {
        textId: currentItem.textId,
        projectId: currentItem.projectId,
        pageId: currentItem.pageId,
        id: currentItem.id,
        text: newText,
        x: currentItem.x,
        y: currentItem.y,
        size: currentItem.size,
        color: currentItem.color,
      },
    };

    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(textData));
    } else {
      console.error('WebSocket is not open');
    }
  };
  return {
    handleTextDragEnd,
    handleTextChange,
  };
};

export default useTextHandlers;

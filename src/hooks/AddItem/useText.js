import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, textList } from '../../store/recoil';

const useText = (socket, code) => {
  const [textValue, setTextValue] = useRecoilState(textList);
  const pageData = useRecoilValue(pageState);
  const currentTextList = textValue[pageData] || [];
  const randomX = 600 + (Math.random() * 60 - 30);
  const randomY = 300 + (Math.random() * 60 - 30);
  const textCountInCurrentPage = currentTextList.length;

  const addText = (data) => {
    const newTextBox = {
      x: data.x,
      y: data.y,
      text: data.text,
      size: data.size,
      color: data.color,
      id: data.textId,
    };
    setTextValue((prevTextValue) => {
      const updatedTextList = prevTextValue[data.projectId] || [];
      return {
        ...prevTextValue,
        [data.projectId]: [...updatedTextList, newTextBox],
      };
    });
  };
  const sendText = () => {
    const textData = {
      saveType: 'saveText',
      editType: '0',
      deleteType: '0',
      roomId: code,
      text: {
        projectId: pageData,
        pageId: pageData,
        id: `textBox${textCountInCurrentPage + 1}`,
        text: 'New Text',
        x: randomX,
        y: randomY,
        size: 24,
        color: 'blue',
      },
    };

    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(textData));
    } else {
      console.error('WebSocket is not open');
    }
  };

  return { textValue, addText, sendText };
};

export default useText;

import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, textList } from '../../store/recoil';
import { ProjectInfo } from '../../store/projectState';

const useText = (socket) => {
  const [textValue, setTextValue] = useRecoilState(textList);
  const pageData = useRecoilValue(pageState);
  const prjoectData = useRecoilValue(ProjectInfo);

  const currentTextList = textValue[pageData] || [];
  const randomX = 600 + (Math.random() * 60 - 30);
  const randomY = 300 + (Math.random() * 60 - 30);
  const textCountInCurrentPage = currentTextList.length;

  const addText = (data) => {
    const newTextBox = {
      textId: data.textId,
      projectId: data.projectId,
      pageId: data.pageId,
      id: data.textId,
      text: data.text,
      x: data.x,
      y: data.y,
      size: data.size,
      color: data.color,
    };
    setTextValue((prevTextValue) => {
      const updatedTextList = prevTextValue[data.pageId] || [];
      return {
        ...prevTextValue,
        [data.pageId]: [...updatedTextList, newTextBox],
      };
    });
  };
  const sendText = () => {
    const textData = {
      saveType: 'saveText',
      editType: '0',
      deleteType: '0',
      roomId: prjoectData.code,
      text: {
        projectId: prjoectData.projectId,
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

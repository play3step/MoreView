import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, textList } from '../../store/recoil';

const useText = () => {
  const [textValue, setTextValue] = useRecoilState(textList);
  const pageData = useRecoilValue(pageState);
  const currentPageText = textValue[pageData] || [];

  const addText = () => {
    const randomX = 600 + (Math.random() * 60 - 30);
    const randomY = 300 + (Math.random() * 60 - 30);
    const textCountInCurrentPage = currentPageText.length;

    const newTextBox = {
      x: randomX,
      y: randomY,
      text: 'New Text',
      size: 24,
      color: 'blue',

      id: `textBox${textCountInCurrentPage + 1}`,
    };
    const updatedTextBoxes = {
      ...textValue,
      [pageData]: [...currentPageText, newTextBox],
    };
    setTextValue(updatedTextBoxes);
  };
  return { textValue, addText };
};

export default useText;

import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { historyState } from '../../../store/recoil';

function useHistory(
  shapeValue,
  setShapeValue,
  textValue,
  setTextValue,
  imgValue,
  setImgValue,
) {
  const [{ history, currentStep }, setHistoryState] =
    useRecoilState(historyState);

  useEffect(() => {
    const currentState = { shapeValue, textValue, imgValue };
    const newHistory = [...history.slice(0, currentStep + 1), currentState];
    setHistoryState({
      history: newHistory,
      currentStep: newHistory.length - 1,
    });
  }, [shapeValue, textValue, imgValue]);

  const undo = () => {
    if (currentStep === 0) return;
    const previousState = history[currentStep - 1];
    console.log('Undoing to', previousState);
    setHistoryState({ history, currentStep: currentStep - 1 });
    setShapeValue(previousState.shapeValue);
    setTextValue(previousState.textValue);
    setImgValue(previousState.imgValue);
  };

  const redo = () => {
    if (currentStep === history.length - 1) return;
    const nextState = history[currentStep + 1];
    console.log('Redoing to', nextState);
    setShapeValue(nextState.shapeValue);
    setTextValue(nextState.textValue);
    setImgValue(nextState.imgValue);
    setHistoryState({ history, currentStep: currentStep + 1 });
  };

  return { undo, redo };
}

export default useHistory;

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
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
    if (history.length > 0 && currentStep >= 0) {
      const currentState = history[currentStep];
      setShapeValue(currentState.shapeValue);
      setTextValue(currentState.textValue);
      setImgValue(currentState.imgValue);
    }
  }, [currentStep]);

  useEffect(() => {
    const currentState = { shapeValue, textValue, imgValue };
    if (JSON.stringify(history[currentStep]) !== JSON.stringify(currentState)) {
      const newHistory = [...history.slice(0, currentStep + 1), currentState];
      setHistoryState({
        history: newHistory,
        currentStep: newHistory.length - 1,
      });
    }
  }, [shapeValue, textValue, imgValue]);

  const undo = () => {
    if (currentStep === 0) return;
    setHistoryState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep - 1,
    }));
  };

  const redo = () => {
    if (currentStep >= history.length - 1) return;
    setHistoryState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep + 1,
    }));
  };

  return { undo, redo };
}

export default useHistory;

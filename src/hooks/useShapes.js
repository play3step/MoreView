import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, shapeList } from '../store/recoil';

function useShapes() {
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);
  const pageData = useRecoilValue(pageState);

  const addShape = (shapeType) => {
    setShapeValue((prevShapeValue) => {
      const currentPageShapes = prevShapeValue[pageData] || [];
      const shapeCountInCurrentPage = currentPageShapes.length;

      let newShape;
      const randomX = 600 + (Math.random() * 60 - 30);
      const randomY = 300 + (Math.random() * 60 - 30);

      if (shapeType === 'Rectangle') {
        newShape = {
          type: 'Rectangle',
          x: randomX,
          y: randomY,
          width: 100,
          height: 100,
          fill: 'blue',
          id: `rect${shapeCountInCurrentPage + 1}`,
        };
      } else if (shapeType === 'Circle') {
        newShape = {
          type: 'Circle',
          x: randomX,
          y: randomY,
          radiusX: 50,
          radiusY: 50,
          fill: 'green',
          id: `circle${shapeCountInCurrentPage + 1}`,
        };
      }
      return {
        ...prevShapeValue,
        [pageData]: [...currentPageShapes, newShape],
      };
    });
  };

  return { shapeValue, addShape };
}

export default useShapes;

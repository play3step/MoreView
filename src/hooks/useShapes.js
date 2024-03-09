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
      } else if (shapeType === 'Line') {
        const startPointX = randomX - 100; // 시작점 X 좌표
        const startPointY = randomY; // 시작점 Y 좌표
        const endPointX = randomX + 100; // 끝점 X 좌표
        const endPointY = randomY; // 끝점 Y 좌표

        // 시작점과 끝점에 해당하는 원 생성
        const startAnchor = {
          type: 'Circle',
          x: startPointX,
          y: startPointY,
          radius: 10,
          fill: 'red',
          id: `startAnchor${shapeCountInCurrentPage + 1}`,
        };

        const endAnchor = {
          type: 'Circle',
          x: endPointX,
          y: endPointY,
          radius: 10,
          fill: 'red',
          id: `endAnchor${shapeCountInCurrentPage + 2}`,
        };
        newShape = {
          type: 'Line',
          points: [startPointX, startPointY, endPointX, endPointY],
          stroke: 'black',
          strokeWidth: 2,
          id: `line${shapeCountInCurrentPage + 3}`,
        };

        return {
          ...prevShapeValue,
          [pageData]: [...currentPageShapes, startAnchor, endAnchor, newShape],
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

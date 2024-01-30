import { useRecoilState } from 'recoil';
import { shapeList } from '../store/recoil';

function useShapes() {
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);

  const addShape = (shapeType) => {
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
        id: `rect${shapeValue.length + 1}`,
      };
    } else if (shapeType === 'Circle') {
      newShape = {
        type: 'Circle',
        x: randomX,
        y: randomY,
        radius: 50,
        fill: 'green',
        id: `circle${shapeValue.length + 1}`,
      };
    } else if (shapeType === 'Triangle') {
      newShape = {
        type: 'Triangle',
        x: randomX,
        y: randomY,
        points: [0, 0, 100, 100, 100, 0], // 삼각형 꼭짓점 좌표
        fill: 'yellow',
        id: `triangle${shapeValue.length + 1}`,
      };
    }
    setShapeValue([...shapeValue, newShape]);
  };

  return { shapeValue, addShape };
}
export default useShapes;

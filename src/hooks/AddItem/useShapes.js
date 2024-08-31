import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, shapeList } from '../../store/recoil';

function useShapes(socket, code) {
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);
  const pageData = useRecoilValue(pageState);
  const currentPageList = shapeValue[pageData] || [];
  const shapeCountInCurrentPage = currentPageList.length;

  let newShape;
  const randomX = 600 + (Math.random() * 60 - 30);
  const randomY = 300 + (Math.random() * 60 - 30);

  const addShape = (shapeType, data) => {
    if (shapeType === 'Rectangle') {
      newShape = {
        rectangleId: data.rectangleId,
        projectId: data.projectId,
        pageId: data.projectId,
        id: data.id,
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
        fill: data.fill,
        type: data.type,
      };
    } else if (shapeType === 'Circle') {
      newShape = {
        circleId: data.circleId,
        projectId: data.projectId,
        pageId: data.projectId,
        id: data.id,
        x: data.x,
        y: data.y,
        radiusX: data.radiusX,
        radiusY: data.radiusY,
        fill: data.fill,
        type: data.type,
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
      setShapeValue((prevShapeValue) => {
        const updatedShapeList = prevShapeValue[data.projectId] || [];
        return {
          ...prevShapeValue,
          [data.projectId]: [
            ...updatedShapeList,
            startAnchor,
            endAnchor,
            newShape,
          ],
        };
      });

      return;
    }

    setShapeValue((prevShapeValue) => {
      const updatedShapeList = prevShapeValue[data.projectId] || [];
      return {
        ...prevShapeValue,
        [data.projectId]: [...updatedShapeList, newShape],
      };
    });
  };
  const sendShape = (shapeType) => {
    if (shapeType === 'Rectangle') {
      newShape = {
        saveType: 'saveRectangle',
        editType: '0',
        deleteType: '0',
        roomId: code,
        rectangle: {
          projectId: pageData,
          pageId: pageData,
          id: `rect${shapeCountInCurrentPage + 1}`,
          x: randomX,
          y: randomY,
          width: 100,
          height: 100,
          fill: 'blue',
          type: 'Rectangle',
        },
      };
    } else if (shapeType === 'Circle') {
      newShape = {
        saveType: 'saveCircle',
        editType: '0',
        deleteType: '0',
        roomId: code,
        circle: {
          projectId: pageData,
          pageId: pageData,
          id: `circle${shapeCountInCurrentPage + 1}`,
          x: randomX,
          y: randomY,
          radiusX: 50,
          radiusY: 50,
          fill: 'green',
          type: 'Circle',
        },
      };
    }
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(newShape));
    } else {
      console.error('WebSocket is not open');
    }
  };

  return { shapeValue, addShape, sendShape };
}

export default useShapes;

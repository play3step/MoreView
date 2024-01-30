import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import ElementItem from './ItemContainer/ElementItem';
import CloseBtn from '../../button/CloseBtn';
import { shapeList } from '../../../store/recoil';

function ElementInteractive({ onClose }) {
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);

  const handleAddShape = (shapeType) => {
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
    }
    setShapeValue([...shapeValue, newShape]);
  };
  return (
    <ShapeInteractiveContainer>
      <ShapeItemContainer>
        <ElementItem onAddShape={handleAddShape} />
      </ShapeItemContainer>
      <ClosePostion>
        <CloseBtn onClose={onClose} />
      </ClosePostion>
    </ShapeInteractiveContainer>
  );
}

export default ElementInteractive;

const ShapeInteractiveContainer = styled.div`
  width: 25.7638vw;
  height: 93.652vh;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;

const ShapeItemContainer = styled.div`
  width: 22.083vw;
  height: 81.542vh;
  background-color: white;
  padding: 1.56vh 1.25vw 3.3vh 1.25vw;
`;

const ClosePostion = styled.div`
  position: absolute;
  right: -0.1vw;
`;

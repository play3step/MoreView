import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import ElementItem from './ItemContainer/ElementItem';
import CloseBtn from '../../button/CloseBtn';
import { shapeList } from '../../../store/recoil';

function ElementInteractive({ onClose }) {
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);

  const addRectangle = () => {
    const newRect = {
      x: Math.random() * 100, // 임의의 위치
      y: Math.random() * 100, // 임의의 위치
      width: 100,
      height: 100,
      fill: 'blue', // 새 사각형의 색상
      id: `rect${shapeValue.length + 1}`, // 고유 ID
    };
    setShapeValue([...shapeValue, newRect]);
  };

  return (
    <ShapeInteractiveContainer>
      <ShapeItemContainer>
        <ElementItem onClick={addRectangle} />
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

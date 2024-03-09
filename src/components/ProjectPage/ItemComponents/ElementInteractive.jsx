import styled from 'styled-components';
import useImage from '../../../hooks/useImage';
import useShapes from '../../../hooks/useShapes';

import ElementItem from './ElementItem';
import CloseBtn from '../../button/CloseBtn';

function ElementInteractive({ onClose }) {
  const { addShape } = useShapes();
  const { addImage } = useImage();
  return (
    <ShapeInteractiveContainer>
      <ShapeItemContainer>
        <ElementItem onAddShape={addShape} onAddImg={addImage} />
        <button type="button" onClick={() => addImage()}>
          이미지 추가
        </button>
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

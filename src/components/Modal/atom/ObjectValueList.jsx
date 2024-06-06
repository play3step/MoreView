import styled from 'styled-components';
import { useState } from 'react';

function ObjectValueList({ objectValue, handlePositionChange }) {
  const [tempSize, setTempSize] = useState(objectValue.size);
  const [tempX, setTempX] = useState(objectValue.x);
  const [tempY, setTempY] = useState(objectValue.y);
  const [tempZ, setTempZ] = useState(objectValue.z);

  const handleChangeSize = (e) => setTempSize(parseFloat(e.target.value));
  const handleChangeX = (e) => setTempX(parseFloat(e.target.value));
  const handleChangeY = (e) => setTempY(parseFloat(e.target.value));
  const handleChangeZ = (e) => setTempZ(parseFloat(e.target.value));

  const handleConfirm = () => {
    handlePositionChange(objectValue.id, 'size', tempSize);
    handlePositionChange(objectValue.id, 'x', tempX);
    handlePositionChange(objectValue.id, 'y', tempY);
    handlePositionChange(objectValue.id, 'z', tempZ);
  };

  return (
    <ObjectList>
      <ObjectName>{objectValue.id}</ObjectName>
      <ObjectSize type="number" value={tempSize} onChange={handleChangeSize} />
      <ObjectX type="number" value={tempX} onChange={handleChangeX} />
      <ObjectY type="number" value={tempY} onChange={handleChangeY} />
      <ObjectZ type="number" value={tempZ} onChange={handleChangeZ} />
      <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
    </ObjectList>
  );
}

export default ObjectValueList;

const ObjectList = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
`;

const ObjectName = styled.p`
  margin-left: -0.8vw;
`;

const ObjectSize = styled.input`
  width: 4.6vw;
  height: 1.7vw;
  padding: 0.6vw;
  font-size: 2wv;
  margin-left: 4.2vw;
`;

const ObjectX = styled.input`
  width: 4vw;
  height: 1.7vw;
  padding: 0.6vw;
  font-size: 2wv;
  margin-left: 2.6vw;
`;
const ObjectY = styled.input`
  width: 4vw;
  height: 1.7vw;
  padding: 0.6vw;
  font-size: 2wv;
  margin-left: 2.6vw;
`;
const ObjectZ = styled.input`
  width: 4vw;
  height: 1.7vw;
  padding: 0.6vw;
  font-size: 2wv;
  margin-left: 2.6vw;
`;
const ConfirmButton = styled.button`
  margin-left: 0.6vw;
  padding: 0.4vw 1vw;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

import styled from 'styled-components';
import ControlBox from '../../EditPage/EditTool/atom/ControlBox';

function ObjectValueList({ objectValue, plusSizeHandle, minusSizeHandle }) {
  return (
    <ObjectList>
      <ObjectName>{objectValue.id}</ObjectName>
      <ControlBox
        sizeData={objectValue.size}
        plus={plusSizeHandle}
        minus={minusSizeHandle}
      />
      <ObjectX>{objectValue.x}</ObjectX>
      <ObjectY>{objectValue.y}</ObjectY>
      <ObjectZ>{objectValue.z}</ObjectZ>
    </ObjectList>
  );
}

export default ObjectValueList;

const ObjectList = styled.div`
  display: flex;
  gap: 1vw;
`;

const ObjectName = styled.p``;
const ObjectX = styled.p``;
const ObjectY = styled.p``;
const ObjectZ = styled.p``;

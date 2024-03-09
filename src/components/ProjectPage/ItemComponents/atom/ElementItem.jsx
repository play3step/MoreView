import styled from 'styled-components';
import ItemTitle from './ItemTitle';
import ShapeBox from './ShapeBox';
import ImageBox from './ImageBox';

function ElementItem({ onAddShape }) {
  return (
    <ElementItemBox>
      <Itemposition>
        <ItemTitle title="도형" />
        <ShapeBackground>
          <ShapeBox onClick={() => onAddShape('Rectangle')} shape="Rectangle" />
          <ShapeBox onClick={() => onAddShape('Circle')} shape="Circle" />
          <ShapeBox onClick={() => onAddShape('Line')} shape="Line" />
        </ShapeBackground>
      </Itemposition>
      <Itemposition>
        <ItemTitle title="이미지" />
        <ImgBackground>
          <ImageBox />
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </ImgBackground>
      </Itemposition>
    </ElementItemBox>
  );
}

export default ElementItem;

const ElementItemBox = styled.div`
  width: 19.5138vw;
`;

const Itemposition = styled.div`
  margin-top: 1.878vh;
`;

const ShapeBackground = styled.div`
  margin-top: 0.6vw;
  height: 8.88888888888889vh;
  background-color: #e9e9e9;
  border-radius: 15px;
  display: flex;
  padding: 1vw;
  gap: 0.5vw;
`;

const ImgBackground = styled.div`
  margin-top: 0.6vw;
  background-color: #e9e9e9;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap; /* 이 부분을 추가합니다 */

  flex-shrink: 0;
  padding: 1vw;
  gap: 0.5vw;
`;

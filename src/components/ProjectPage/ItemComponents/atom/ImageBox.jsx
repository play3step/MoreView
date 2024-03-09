import styled from 'styled-components';
import { ReactComponent as Image } from '../../../../assets/icon/image.svg';

function ImageBox({ imgUrl, onClick }) {
  return (
    <div
      style={{
        flexShrink: 0,
      }}
    >
      {imgUrl ? (
        <ImgSize src={imgUrl} alt="이미지" onClick={onClick} />
      ) : (
        <Image
          alt="image"
          width="5.208333333333334vw"
          height="9.25925925925926vh"
        />
      )}
    </div>
  );
}

export default ImageBox;

const ImgSize = styled.img`
  width: 5.208333333333334vw;
  height: 9.25925925925926vh;
`;

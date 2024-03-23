import styled from 'styled-components';
import { ReactComponent as Image } from '../../../../../assets/icon/image.svg';

function ImageList({ imgUrl, onClick }) {
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
          width="8.333333333333332vw"
          height="8.333333333333332vw"
        />
      )}
    </div>
  );
}

export default ImageList;

const ImgSize = styled.img`
  width: 8.333333333333332vw;
  height: 8.333333333333332vw;
`;

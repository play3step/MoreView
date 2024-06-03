import styled from 'styled-components';

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
        <button
          alt="image"
          width="8.333333333333332vw"
          height="8.333333333333332vw"
          type="button"
        >
          ?
        </button>
      )}
    </div>
  );
}

export default ImageList;

const ImgSize = styled.img`
  width: 8.333333333333332vw;
  height: 8.333333333333332vw;
`;

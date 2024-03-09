import { ReactComponent as Image } from '../../../../assets/icon/image.svg';

function ImageBox() {
  return (
    <div
      style={{
        flexShrink: 0,
      }}
    >
      <Image
        alt="image"
        width="5.208333333333334vw"
        height="9.25925925925926vh"
      />
    </div>
  );
}

export default ImageBox;
